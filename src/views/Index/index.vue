<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="row"
      max-height="500px"
      :search-options="{
        enabled: true
      }"
      :pagination-options="{
        enabled: true,
        mode: 'records'
      }"
    >
      <template #table-actions>
        <el-button
          type="primary"
          size="small"
          v-on:click="exportExcel"
          class="table-actions"
          >Primary</el-button
        >
        <el-button
          type="warning"
          size="small"
          v-on:click="exportCopy"
          class="table-actions"
          >warning</el-button
        >
      </template>
    </vue-good-table>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
export default {
  setup() {
    const row = ref([])
    const columns = ref([])
    const getAxios = function () {
      axios
        .get('https://api.publicapis.org/entries')
        .then((res) => {
          console.log(res)
          const { entries } = res.data
          row.value = entries
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getAxios()
    columns.value = [
      {
        label: 'API',
        field: 'API'
      },
      {
        label: 'Description',
        field: 'Description',
        type: 'String'
      },
      {
        label: 'Auth',
        field: 'Auth',
        type: 'String'
      },
      {
        label: 'Cors',
        field: 'Cors',
        type: 'String'
      },
      {
        label: 'Link',
        field: 'Link'
      }
    ]

    const exportExcel = () => alert('123123.')
    const exportCopy = () => alert('it just copy.')

    return {
      row,
      columns,
      exportExcel,
      exportCopy
    }
  }
}
</script>
<style scoped lang="scss">
.table-actions {
  margin-inline: 5px;
}
</style>
