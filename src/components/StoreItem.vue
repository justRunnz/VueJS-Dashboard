<template>
  <div class="store">
    <h1>This is the store </h1>
  </div>

  <div class="">
    <div class="flex">
      <div class="m-20" v-for="(product, index) in products" :key="index">
        <table>
          <thead class="flex flex-col">
          <td>
            <img class="w-64 h-38" :src="product.img" />
          </td>
          <td>{{ product.name }}</td>
          </thead>
          <tbody>
          <tr>
            <th>Price : {{ product.price }} €</th>
          </tr>
          <tr>
            <th>Stock : {{ product.stock }}</th>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "@/stores/counter.js";
import { mapStores } from "pinia";
import {onBeforeMount} from "vue";

export default {
  setup() {
    const useStore = useCounterStore();
    const products = useStore.products;
    onBeforeMount(() => {
      useStore.fetchProducts();
    });
    return {
      products,
    };
  },
  computed: {
    ...mapStores(useCounterStore),
  }
  }
</script>
