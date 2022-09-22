<template>
  <div class="right-container">
    <div class="productContainer">
      <StoreItem/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StoreItem from '@/components/StoreItem.vue'

export default {
  name: 'StoreView',
  components: {
    StoreItem
  }
}
</script>

<style>
.right-container {
  display: flex;
  /*align-items: center ;*/
  justify-content: center;
  width: 100%;
  /*margin-left: 10em;*/
}
.productContainer {
  width: 80%;
}
</style>