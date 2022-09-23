<template>
  <div class="right-container">
    <div class="productContainer">
      <DashboardCommands/>
    </div>
  </div>
</template>

<script>

import DashboardCommands from '@/components/DashboardCommands.vue'
 export default {
   name: 'CommandsView',
   components: {
     DashboardCommands
   }
 }
</script>
