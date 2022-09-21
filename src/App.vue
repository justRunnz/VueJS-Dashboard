<template>
  <div id="app">
    <LoadingScreen :isLoading="isLoading" />
    <main v-if="!isLoading">
      <StoreViewVue />
    </main>
  </div>
</template>

<script>
import LoadingScreen from "./components/LoadingScreen";
import StoreViewVue from "./views/StoreView.vue";

export default {
  name: "App",
  components: {
    LoadingScreen,
    StoreViewVue,
  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>