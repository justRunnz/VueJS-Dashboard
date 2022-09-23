<template>
  <div class="right-container">
    <div class="productContainer">
      <div class="title font-bold">
        <h1> Users </h1>
      </div>

      <div
          class="overflow-x-auto relative shadow-md sm:rounded-lg productItemContainer"
      >
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
          <tr>
            <th scope="col" class="py-3 px-6">Id</th>
            <th scope="col" class="py-3 px-6">UserName</th>
            <th scope="col" class="py-3 px-6">Name</th>
            <th scope="col" class="py-3 px-6">Surname</th>
            <th scope="col" class="py-3 px-6">Email</th>
            <th scope="col" class="py-3 px-6">Money</th>
            <th scope="col" class="py-3 px-6">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              v-for="(user, index) in users"
              :key="index"
          >
            <th scope="col" class="py-3 px-6">
              {{ user.id }}
            </th>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ user.username }}
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ user.firstname }}
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ user.lastname }}
            </td>
            <td class="py-4 px-6">
              <div class="flex items-center space-x-3">
                {{ user.email }}
              </div>
            </td>
            <td class="py-4 px-6">
              <div class="flex items-center space-x-3">
                {{ user.money }} €
              </div>
            </td>
            <td class="py-4 px-6">
              <label  class="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer " @click="deleteClient(user.id)">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </label>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "@/stores/counter.js";
import { mapState, mapStores } from "pinia";
import axios from "axios";
export default {
  props: {
    title: String,
  },
  methods: {
    deleteClient(userId) {
      var response = confirm(
          "Etes vous sur de vouloir supprimer cet utilisateur?"
      );
      if (response) {
        axios.delete(`http://localhost:3000/users/${userId}`).then(() => {
          let i = this.users.map((data) => data.id).indexOf(userId);
          this.users.splice(i, 1);
        });
      }
    },
  },
  computed: {
    ...mapStores(useCounterStore),
    ...mapState(useCounterStore, ["products", "users"]),
  },
  beforeMount() {
    this.counterStore.fetchProducts();
    this.counterStore.fetchUsers();
  },
};
</script>

<style>
.productItemContainer {
  background-color: #ab7d63;
}
.title {
  margin: 2em 0;
}
</style>