<template>
  <div class="page products">
    <HeaderBar displayName="Products" />
    <div class="card-section">
      <Card name="Category with Most Parts" key="HOOKS" value=76></Card>
      <Card name="Country that Produces the Most Parts" key="Taiwan" value=104></Card>
    </div>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
import Card from '../components/Card'
export default {
  name: 'Products',

  components: {
    HeaderBar,
    Card
  },
}
</script>