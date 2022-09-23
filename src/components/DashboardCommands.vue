<template>
  <div class="title font-bold">
    <h1> Commands </h1>
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
        <th scope="col" class="py-3 px-6">User Id</th>
        <th scope="col" class="py-3 px-6">Product Id</th>
        <th scope="col" class="py-3 px-6">Qty</th>
        <th scope="col" class="py-3 px-6">Total Price</th>
        <th scope="col" class="py-3 px-6">Status</th>
        <th scope="col" class="py-3 px-6">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          v-for="(orders, index) in orders"
          :key="index"
      >
        <th scope="col" class="py-3 px-6">
          {{ orders.id }}
        </th>
        <th scope="col" class="py-3 px-6">
          {{ orders.user_id }}
        </th>
        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
<!--          this.orders[0].products[0].product_id-->
          {{ orders.products[0].product_id }}
        </td>
        <td class="py-4 px-6">
          <div class="flex items-center space-x-3">
            {{ orders.products[0].product_id  }}
          </div>
        </td>
        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
          {{ orders.total_price }}€
        </td>
        <td v-if="orders.status === 0 " class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
        </td>
        <td v-if="orders.status === 1 " class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
          <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        </td>
        <td v-if="orders.status === 2 " class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>

        </td>
        <td class="py-4 px-6">
          <label
              class="font-medium text-red-600 dark:text-red-500 hover:underline"
              @click="deleteOrder(orders.id)"
          >Remove</label
          >
          /
          <label
              class="font-medium text-blue-600 dark:text-red-500 hover:underline"
              @click="getProduct(orders.id)"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropModify"
          >Modify</label
          >
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import {mapState, mapStores} from "pinia";
import {useCounterStore} from "@/stores/counter";
import axios from "axios";

export default {
  methods: {
    deleteOrder(orderId) {
      var response = confirm("Etes vous sur ?");
      if (response) {
        axios.delete(`http://localhost:3000/orders/${orderId}`).then(() => {
          let i = this.orders.map((data) => data.id).indexOf(orderId);
          this.orders.splice(i, 1);
        });
      }
    },
  },
  computed: {
    ...mapStores(useCounterStore),
    ...mapState(useCounterStore, ["products", "users", "orders"]),
  },
  beforeMount() {
    this.counterStore.fetchProducts();
    this.counterStore.fetchUsers();
    this.counterStore.fetchOrders();
  },
}
</script>