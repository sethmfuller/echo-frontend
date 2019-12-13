<template>
  <div class="page products">
    <HeaderBar displayName="Products" />
    <div class="card-section">
      <Card
        cardName="Category with Most Parts" 
        :cardKey="categoryWithMostProducts.name" 
        :cardValue="categoryWithMostProducts.numProducts">
      </Card>
    </div>
    <div class="other-section">
      <span>Search for the products that you are interested in</span>
      <div class="search-criteria-container">
        <div class="dropdown-container">
          <span class="dropdown-label">COO</span>
          <div class="dropdown">
            <select v-model="selectedCOO" name="coo" class="dropdown-select">
              <option v-for="coo in coos" :key="coo.cooId" :value="coo.cooId">{{coo.name}}</option>
            </select>
          </div> 
        </div>
        <div class="dropdown-container">
          <span class="dropdown-label">Category</span>
          <div class="dropdown">
            <select v-model="selectedCategory" name="category" class="dropdown-select">
              <option v-for="category in categories" :key="category.cid" :value="category.cid">{{category.name}}</option>
            </select>
          </div>
        </div>
        <div class="search-button" @click="search">
          SEARCH
        </div>
      </div>
      <ProductsTable 
        :headerAtt="['Part ID', 'Description', 'Category', 'COO']" 
        :queriedData="queriedData" 
        :selectedCategoryName="selectedCategoryName"
        :selectedCOOName="selectedCOOName">
      </ProductsTable>
    </div>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
import ProductsTable from '../components/ProductsTable'
import Card from '../components/Card'
import { RepositoryFactory } from '../api/repositoryFactory'
const CooRepository = RepositoryFactory.get('coo');
const CategoryRepository = RepositoryFactory.get('category');
const ProductRepository = RepositoryFactory.get('product');

export default {
  name: 'Products',

  components: {
    HeaderBar,
    Card,
    ProductsTable,
  },

  data() {
    return {
      coos: [],
      categories: [],
      categoryWithMostProducts: '',
      selectedCOO: '',
      selectedCategory: '',
      queriedData: [],
      selectedCategoryName: '',
      selectedCOOName: '',
    }
  },

  methods: {
    async search() {
      try {
        this.queriedData = (await ProductRepository.getByCategoryAndCOO(this.selectedCategory, this.selectedCOO)).data.data.partDetails;
        this.selectedCOOName = this.categories.find(ca => ca.cid == this.selectedCategory).name;
        this.selectedCategoryName = this.coos.find(coo => coo.cooId == this.selectedCOO).name;
      }
      catch(e) {
        console.error(e);
      }
    },
  },

  async created() {
    try {
      this.coos = (await CooRepository.get()).data.data;
      this.categories = (await CategoryRepository.get()).data.data;
      this.categoryWithMostProducts = (await CategoryRepository.getWithMostProducts()).data.data;
    
      this.selectedCOO = this.coos[0].cooId;
      this.selectedCategory = this.categories[0].cid;
    }
    catch(e) {
      console.error(e);
    }
  },
}
</script>