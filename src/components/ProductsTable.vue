<template>
  <table class="customTable">
        <tr>
          <th v-for="(att, index) in headerAtt" :key="index">{{att}}</th>
        </tr>
        <tr v-for="element in queriedData" :key="element.partId">
          <td>{{element.partId}}</td>
          <td>{{element.description}}</td>
          <td>{{selectedCategoryName}}</td>
          <td>{{selectedCOOName}}</td>
        </tr>
        <tr v-if="queriedData.length == 0">No Entries</tr>
      </table>
</template>

<script>
export default {
  name: 'ProductsTable',

  props: ['headerAtt', 'queriedData', 'selectedCategoryName', 'selectedCOOName'],
}
</script>