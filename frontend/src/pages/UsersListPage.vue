<template>
  <!-- Table with all users and the level of permissions -->
  <div class="usersPage">
    <div class="tableHeader">
      <q-btn
        label="Create User"
        color="green"
        @click="goToCreateUser"
      />
      <q-btn
        :label="deletedActive ? 'Cancel' : 'Delete'"
        color="blue"
        @click="activeDelete"
      />
      <q-btn
        v-if="selected.length > 0"
        label="Delete"
        color="red"
        @click="deleteUser"
      />
    </div>
    <q-table
      style="height: 680px; width: 100%; margin-top: 15px; background-color: #EBF1F3; padding: 15px;"
      class="sticky-header-table"
      flat
      :rows="rows"
      :columns="columns"
      :row-key="row => row.id"
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
          <q-td key="permissions" :props="props" class="editInput">
            <q-icon
              class="edit__icon"
            >
              <img src="src/assets/edit.svg" alt="edit" />
            </q-icon>
            {{ getPermissionString(props.row.permissions) }}
            <q-popup-edit v-model="props.row.permissions" auto-save v-slot="scope" @save="oldPermission=props.row.permissions" @update:model-value="updateUser(props.row)">
              <q-select v-model="scope.value" dense @keyup.enter="scope.set" :options="permissionOptions" />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <q-dialog v-model="createUserPopup">
      <CommonPopup title="Create User" type="user"/>
    </q-dialog>
  </div>
</template>

<style>
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

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import apiPathUrl from '../config/apiPathUrl'
import CommonPopup from '../components/CommonPopup.vue'

export default defineComponent({
  name: 'UsersListPage',

  components: {
    CommonPopup
  },

  data () {
    return {
      permissionOptions: [
        '3: Admin',
        '2: Staff',
        '1: User'
      ],
      columns: [
        { name: 'username', label: 'Username', align: 'left', field: 'username', sortable: true },
        { name: 'email', label: 'Email', align: 'left', field: 'email', sortable: true },
        { name: 'is_staff', label: 'Staff', align: 'center', field: 'is_staff', sortable: true },
        { name: 'is_superuser', label: 'Superuser', align: 'center', field: 'is_superuser', sortable: true },
        { name: 'permissions', label: 'Permissions', align: 'left', field: 'permissions', sortable: true }
      ],
      rows: ref([]),
      pagination: {
        sortBy: 'id',
        descending: false,
        rowsPerPage: 0
      },
      deletedActive: ref(false),
      selection: ref('none'),
      selected: ref([]),
      createUserPopup: ref(false)
    }
  },

  methods: {
    async getUsers () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.getUsers}`
      await axios.get(url)
        .then(response => {
          this.rows = response.data.data
          this.rows.forEach(row => {
            row.is_superuser = row.permissions === 3
            row.is_staff = !row.is_superuser
            row.permissionString = this.getPermissionString(row.permissions)
          })
          console.log(this.rows)
        })
        .catch(error => {
          console.log(error)
        })
    },
    goToCreateUser () {
      this.createUserPopup = true
    },
    activeDelete () {
      this.deletedActive = !this.deletedActive
      this.selection === 'single' ? this.selection = 'none' : this.selection = 'single'
      this.selected = []
    },
    async deleteUser () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.deleteUser}`
      const body = { username: this.selected[0].username }
      await axios.post(url, body)
        .then(response => {
          this.getUsers()
          this.selected = []
        })
        .catch(error => {
          console.log(error)
        })
      this.activeDelete()
    },

    async updateUser (user) {
      console.log(user)
      const url = `${apiPathUrl.backend}/${apiPathUrl.updateUser}`
      const body = {
        username: user.username,
        permissions: this.rows.find(row => row.username === user.username).permissions
      }
      await axios.post(url, body)
        .then(response => {
          this.getUsers()
        })
        .catch(error => {
          console.log(error)
        })
    },

    getPermissionString (permission) {
      switch (permission) {
        case 3:
          return '3. Admin'
        case 2:
          return '2. Staff'
        case 1:
          return '1. User'
        default:
          return 'User'
      }
    }
  },

  mounted () {
    this.getUsers()
  },

  watch: {
    permissions () {
      this.updateUser()
    }
  }
})
</script>
