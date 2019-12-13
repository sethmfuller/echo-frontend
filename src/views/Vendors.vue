<template>
  <div class="page vendors">
    <HeaderBar displayName="Vendors" />
    <div class="card-section">
        <span>Select category to find vendor with most parts: </span>
        <select v-model="selectedCategory" id="">
          <option v-for="cat in categories" :key="cat.cid" :value="cat.cid">{{cat.name}}</option>
        </select>
        <div class="search-button" @click="search">SEARCH</div>
        <Card
          v-if="returnData != null"
          cardName="Vendor with most parts in specifc category"
          :cardKey="returnData.name"
          :cardValue="returnData.productCount"></Card>
    </div>
    <div class="other-section">
      <span>View the vendors that you are interested in</span>
      <VendorTable
        :headerAtt="['Vendor Number', 'Name']" 
        :vendors="vendors">
      </VendorTable>
    </div>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
import VendorTable from '../components/VendorTable'
import { RepositoryFactory } from '../api/repositoryFactory'
import Card from '../components/Card'
const VendorRepository = RepositoryFactory.get('vendor');
const CategoryRepository = RepositoryFactory.get('category');
export default {
  name: 'Vendors',

  data() {
    return {
      vendors: [],
      categories: [],
      selectedCategory: '',
      returnData: null,
    }
  },

  components: {
    HeaderBar,
    VendorTable,
    Card
  },

  methods: {
    async search() {
      this.returnData = (await VendorRepository.getWithMostProductsByCategory(this.selectedCategory)).data.data;
      console.log(this.returnData)
    },
  },

  async created() {
    this.vendors = (await VendorRepository.get()).data.data;
    this.categories = (await CategoryRepository.get()).data.data;
    this.selectedCategory = this.categories[0].cid;
  },
}
</script>