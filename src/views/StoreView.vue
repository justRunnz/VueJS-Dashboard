<template>
  <div>
    <StoreItem/>
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
