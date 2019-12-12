<template>
  <div class="card">
    <span class="card-title">{{name}}</span>
    <span class="card-key">{{key}}</span>
    <div class="card-value">
      {{value}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['name', 'key', 'value'],
}
</script>