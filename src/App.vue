<template>
  <div id="app">
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
export default {
  name: 'App',

  components: {
    Sidebar
  }
}
</script>