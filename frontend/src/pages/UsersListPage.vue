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
        label="Delete User"
        color="blue"
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
    >
      <template #body="props">
        <q-tr :props="props">
          <q-td key="username" :props="props">{{ props.row.username }}</q-td>
          <q-td key="email" :props="props">{{ props.row.email }}</q-td>
          <q-td key="is_staff" :props="props">
            <q-checkbox v-model="props.row.is_staff" checked-icon="task_alt" unchecked-icon="highlight_off" dense disable color="green"></q-checkbox>
          </q-td>
          <q-td key="is_superuser" :props="props">
            <q-checkbox v-model="props.row.is_superuser" checked-icon="task_alt" unchecked-icon="highlight_off" dense disable color="green"></q-checkbox>
          </q-td>
          <q-td key="permissions" :props="props">
            {{ props.row.permissions }}
            <q-popup-edit v-model="props.row.permissions" auto-save v-slot="scope" @save="oldPermission=props.row.permissions">
              <q-select v-model="scope.value" dense @keyup.enter="scope.set" :options="permissionOptions" />
            </q-popup-edit>
            <q-icon
              class="edit__icon"
            >
              <img src="src/assets/edit.svg" alt="edit" />
            </q-icon>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<style>
.usersPage {
  display: flex;
  gap: 5px;
  margin-top: 25px;
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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UsersListPage',

  data () {
    return {
      permissionOptions: [
        'Admin',
        'Staff',
        'User'
      ],
      columns: [
        { name: 'username', label: 'Username', align: 'left', field: 'username', sortable: true },
        { name: 'email', label: 'Email', align: 'left', field: 'email', sortable: true },
        { name: 'is_staff', label: 'Staff', align: 'center', field: 'is_staff', sortable: true },
        { name: 'is_superuser', label: 'Superuser', align: 'center', field: 'is_superuser', sortable: true },
        { name: 'permissions', label: 'Permissions', align: 'center', field: 'permissions', sortable: true }
      ],
      rows: [
        {
          id: 1,
          username: 'admin',
          email: 'aaa@aaa.com',
          is_staff: false,
          is_superuser: true,
          permissions: 'Admin'
        },
        {
          id: 2,
          username: 'staff',
          email: 'aaa@aaa.com',
          is_staff: true,
          is_superuser: false,
          permissions: 'Staff'
        },
        {
          id: 3,
          username: 'aaa',
          email: 'aaa@aaa.com',
          is_staff: true,
          is_superuser: false,
          permissions: 'User'
        }
      ],
      pagination: {
        sortBy: 'id',
        descending: false,
        rowsPerPage: 0
      }
    }
  },

  methods: {
    goToCreateUser () {
      this.$router.push({ name: 'create-user' })
    },
    deleteUser () {
      console.log('delete user')
    }
  }
})
</script>
