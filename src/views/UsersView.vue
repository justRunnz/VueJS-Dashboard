<template>
  <DashboardUsers/>
</template>

<script>
// @ is an alias to /src
import DashboardUsers from "@/components/DashboardUsers.vue";
export default {
  name: "UsersView",
  components: {
    DashboardUsers,
  },
};
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