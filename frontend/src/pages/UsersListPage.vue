<template>
  <!-- Table with all users and the level of permissions -->
  <div class="usersPage">
    <div class="tableHeader">
      <CommonButton v-if="selection==='none'" message="Create user" icon="add" @click="goToCreateUser"/>
      <CommonButton v-if="selection === 'none'" message="Delete user" icon="delete" @click="activeDelete"/>
      <CommonButton v-if="selection!=='none'" message="Cancel" icon="cancel" @click="cancelDeleteMode"/>
      <CommonButton v-if="selected.length > 0" message="Confirm deletion" icon="check" @click="deleteUser"/>
    </div>
    <q-table
      style="height: 680px; width: 100%; margin-top: 15px; background-color: #EBF1F3; padding: 15px;"
      class="sticky-header-table"
      flat
      :rows="rows"
      :columns="columns"
      :row-key="row => row.username"
      :pagination="pagination"
      virtual-scroll
      hide-bottom
      :selection="selection"
      v-model:selected="selected"
    >
      <template #header-selection="scope">
        <q-checkbox v-model="scope.selected" />
      </template>
      <template #body="props">
        <q-tr :props="props">
          <q-td v-if="selection === 'single' || selection ==='multiple'" auto-width>
            <q-checkbox
              :model-value="props.selected"
              @update:model-value="(val) => {
                props.selected = val;
              }"
            />
          </q-td>
          <q-td key="username" :props="props">{{ props.row.username }}</q-td>
          <q-td key="email" :props="props">{{ props.row.email }}</q-td>
          <q-td key="is_staff" :props="props">
            <q-checkbox v-model="props.row.is_staff" checked-icon="task_alt" unchecked-icon="highlight_off" dense disable color="green"></q-checkbox>
          </q-td>
          <q-td key="is_superuser" :props="props">
            <q-checkbox v-model="props.row.is_superuser" checked-icon="task_alt" unchecked-icon="highlight_off" dense disable color="green"></q-checkbox>
          </q-td>
          <q-td key="permissionString" :props="props" class="editInput">
            <q-icon
              class="edit__icon"
            >
              <img src="src/assets/edit.svg" alt="edit" />
            </q-icon>
            {{ props.row.permissionString }}
            <q-popup-edit v-model="props.row.permissionString" auto-save v-slot="scope" @save="oldPermission=props.row.permission" @update:model-value="updateUser(props.row, true)">
              <q-select v-model="scope.value" dense @keyup.enter="scope.set" :options="permissionOptions" />
            </q-popup-edit>
          </q-td>
          <q-td key="password" :props="props" class="editInput">
            <q-icon
              class="edit__icon"
            >
              <img src="src/assets/edit.svg" alt="edit" />
            </q-icon>
            *************
            <q-popup-edit v-model="props.row.password" auto-save v-slot="scope" @save="oldPassword=props.row.password" @update:model-value="updateUser(props.row, false)">
              <q-input v-model="scope.value" dense @keyup.enter="scope.set" autofocus></q-input>
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <q-dialog v-model="createUserPopup" @hide="getUsers">
      <CommonPopup title="Create User" type="user"/>
    </q-dialog>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import apiPathUrl from '../config/apiPathUrl'
import CommonPopup from '../components/CommonPopup.vue'
import { useQuasar } from 'quasar'
import CommonButton from '../components/CommonButton.vue'

const permissionOptions = [
  'Admin',
  'Staff',
  'User'
]
const columns = [
  { name: 'username', label: 'Username', align: 'left', field: 'username', sortable: true },
  { name: 'email', label: 'Email', align: 'left', field: 'email', sortable: true },
  { name: 'is_staff', label: 'Staff', align: 'center', field: 'is_staff', sortable: true },
  { name: 'is_superuser', label: 'Superuser', align: 'center', field: 'is_superuser', sortable: true },
  { name: 'permissionString', label: 'Permissions', align: 'left', field: 'permissionString', sortable: true },
  { name: 'password', label: 'Password', align: 'left', field: 'password', sortable: true }
]
const rows = ref([])
const pagination = {
  sortBy: 'id',
  descending: false,
  rowsPerPage: 0
}

const selection = ref('none')
const selected = ref([])
const createUserPopup = ref(false)
const $q = useQuasar()

const getUsers = async () => {
  const url = `${apiPathUrl.backend}/${apiPathUrl.getUsers}`
  await axios.get(url)
    .then(response => {
      rows.value = response.data.data
      rows.value.forEach(row => {
        row.is_superuser = row.permissions === 3
        row.is_staff = !row.is_superuser
        row.permissionString = row.permissions === 1 ? 'User' : row.permissions === 2 ? 'Staff' : 'Admin'
      })
    })
    .catch(error => {
      $q.notify({
        type: 'error',
        message: error
      })
    })
}

const goToCreateUser = () => {
  createUserPopup.value = true
}

const activeDelete = () => {
  selection.value = 'single'
}

const cancelDeleteMode = () => {
  selection.value = 'none'
  selected.value = []
}

const deleteUser = async () => {
  const url = `${apiPathUrl.backend}/${apiPathUrl.deleteUser}`
  const body = { username: selected.value[0].username }
  await axios.post(url, body)
    .then(() => {
      getUsers()
      selected.value = []
    })
    .catch(error => {
      $q.notify({
        type: 'error',
        message: error
      })
    })
  activeDelete()
}

const updateUser = async (user, isPermissionUpdated) => {
  let url = ''
  let body = {}
  if (!isPermissionUpdated) {
    url = `${apiPathUrl.backend}/${apiPathUrl.updateUserPassword}`
    body = {
      username: user.username,
      password: rows.value.find(row => row.username === user.username).password
    }
  } else {
    url = `${apiPathUrl.backend}/${apiPathUrl.updateUserPermission}`
    body = {
      username: user.username,
      permissions: rows.value.find(row => row.username === user.username).permissionString === 'Admin' ? 3 : rows.value.find(row => row.username === user.username).permissionString === 'Staff' ? 2 : 1
    }
  }
  await axios.post(url, body)
    .then(() => {
      getUsers()
      $q.notify({
        type: 'success',
        message: 'User updated successfully!'
      })
    })
    .catch(error => {
      $q.notify({
        type: 'error',
        message: error
      })
    })
}

onMounted(() => {
  getUsers()
})
</script>

<style scoped>
.usersPage {
  display: flex;
  gap: 5px;
  margin-top: 50px;
  flex-direction: column;
  align-items: flex-start;
}
.sticky-header-table {
  height: 100%;
  font-size: 14px;
  background-color: #f5f5f5;
}

.sticky-header-table .q-table__top, .q-table__bottom, thead tr:first-child th {
  background-color: #EBF1F3;
  font-size: 14px;
}

thead tr th{
  position: sticky;
  z-index: 1;
}

thead tr:first-child th{
  top: 0;
}

.tableHeader {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 2rem;
  gap: 1rem;
  align-items: flex-start;
}

.edit__icon {
  height: 1rem;
  float: right;
}
</style>
