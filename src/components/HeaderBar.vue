<template>
  <div class="headerbar">
    {{displayName}}
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',

  props:['displayName'],
}
</script>