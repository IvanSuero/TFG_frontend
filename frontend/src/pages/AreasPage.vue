<template>
  <q-page padding>
    <div>
      <CardList :items="areas"/>
      <q-dialog v-model="popup">
        <AddPopup :columns="columns" :disabled="false" @submit-popup="submitPopup" @close-popup="closePopup"/>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CardList from 'src/components/cards/CardList.vue'
import areas from 'src/utils/areas'
import AddPopup from 'src/components/AddPopup.vue'
import apiPathUrl from 'src/config/apiPathUrl'
import axios from 'axios'

export default defineComponent({
  name: 'AreasPage',

  components: {
    CardList,
    AddPopup
  },

  data () {
    return {
      areas,
      popup: false,
      columns: []
    }
  },

  methods: {
    async getColumns () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.columns}`
      const columnsKey = apiPathUrl[this.$route.meta.apiPath].columns
      await axios.get(url)
        .then(response => {
          this.columns = response.data.columns.columns[columnsKey]
          this.visibleColumns = response.data.columns.columns[columnsKey].map(column => column.visible ? column.name : null).filter(column => column !== null)
        })
        .catch(error => {
          console.log(error)
        })
    },

    submitPopup (item) {
      console.log(item)
      this.$router.push({ name: 'areas' })
    },

    closePopup () {
      this.$router.push({ name: 'areas' })
    }
  },

  watch: {
    $route () {
      if (this.$route.name === 'add') {
        this.getColumns()
        this.popup = true
      }
    }
  }
})
</script>
