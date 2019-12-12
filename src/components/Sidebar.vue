<template>
  <div id="sidebar">
    <img src="../assets/echoLogo.png" alt="echo supply logo">
    <div class="tab-container">
      <div class="tab" @click="goToProducts">
        Products
      </div>
      <div class="tab" @click="goToVendors">
        Vendors
      </div>
      <div class="tab" @click="goToChatter">
        Chatter
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',

  methods: {
    goToProducts() {
      if (this.$router.currentRoute.path != '/')
        this.$router.push('/');
    },

    goToVendors() {
       if (this.$router.currentRoute.path != '/vendors')
        this.$router.push('/vendors');
    },

    goToChatter() {
       if (this.$router.currentRoute.path != '/chatter')
        this.$router.push('/chatter');
    },
  }
}
</script>