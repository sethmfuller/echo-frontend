<template>
  <div class="card">
    <span class="card-title">{{cardName}}</span>

    <div class="key-value-container">
      <span class="card-key">{{cardKey}}</span>
      <div class="card-value">{{cardValue}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['cardName', 'cardKey', 'cardValue'],
}
</script>