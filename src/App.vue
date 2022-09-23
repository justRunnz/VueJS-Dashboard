<template>
  <Header />
  <div class="container-content flex">
    <nav>
      <SideBar />
    </nav>
    <router-view />
  </div>

  <!-- <div id="loadingScreen">
    <LoadingScreen :isLoading="isLoading" />
    <main v-if="!isLoading"></main>
  </div> -->
</template>

<script>
// import LoadingScreen from "./components/LoadingScreen";
import SideBar from "./components/SideBar";
import Header from "@/components/HeaderComponent";

export default {
  name: "App",
  components: {
    Header,
    // LoadingScreen,
    SideBar,
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container-content {
  width: 100%;
  min-height: 95vh;
}
</style>
