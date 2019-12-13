<template>
  <table class="customTable">
        <tr>
          <th v-for="(att, index) in headerAtt" :key="index">{{att}}</th>
        </tr>
        <tr v-for="vendor in vendors" :key="vendor.vendNum">
          <td>{{vendor.vendNum}}</td>
          <td>{{vendor.name}}</td>
        </tr>
        <tr v-if="vendors.length == 0"></tr>
      </table>
</template>

<script>
export default {
  name: 'VendorTable',

  props: ['headerAtt', 'vendors'],
}
</script>