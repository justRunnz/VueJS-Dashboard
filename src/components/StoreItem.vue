<template>
  <div class="title font-bold">
    <h1>Products</h1>
  </div>

  <!------------------------------------------------------------------------------------------------------------------------------>

  <div class="overflow-x-auto relative shadow-md sm:rounded-lg productItemContainer">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="py-3 px-6">
          Id
        </th>
        <th scope="col" class="py-3 px-6">
          <span class="sr-only">Image</span>
        </th>
        <th scope="col" class="py-3 px-6">
          Product
        </th>
        <th scope="col" class="py-3 px-6">
          Qty
        </th>
        <th scope="col" class="py-3 px-6">
          Price
        </th>
        <th scope="col" class="py-3 px-6">
          Action
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          v-for="(product, index) in products" :key="index"
      >
        <th scope="col" class="py-3 px-6">
          {{ product.id }}
        </th>
        <td class="p-4 w-32">
          <img :src="product.img" alt="Product image">
        </td>
        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
          {{ product.name }}
        </td>
        <td class="py-4 px-6">
          <div class="flex items-center space-x-3">
            {{ product.stock }}
          </div>
        </td>
        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
          {{ product.price }}€
        </td>
        <td class="py-4 px-6">
          <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline" @click="deleteProducts(product.id)">Remove</a>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

<!------------------------------------------------------------------------------------------------------------------------------>
<!--  <div class="users">-->
<!--    <div v-for="(user, index) in users" :key="index" >-->
<!--      <p>{{user.username}}</p>-->
<!--      <p>{{user.money}}</p>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import { useCounterStore } from "@/stores/counter.js";
import {mapState, mapStores} from "pinia";
import axios from "axios";

// console.log(useCounterStore());
export default {
  methods: {
    deleteProducts(produitId) {
      var response = confirm("Etes vous sur ?");
      if (response) {
        axios.delete(`http://localhost:3000/products/${produitId}`).then(() => {
          let i = this.products.map((data) => data.id).indexOf(produitId);
          this.products.splice(i, 1);
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
}

</script>

<style>
  .productItemContainer {
    background-color: #ab7d63;
  }
  .title {
    margin: 2em 0;
  }
</style>