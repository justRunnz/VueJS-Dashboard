<template>

  <div class="store">
    <h1>This is the store</h1>
    <p>storage {{ this.counterStore.count }}</p>
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
    <!-- <div v-for="(user, index) in users" :key="index">
      <p>{{ user.username }}</p>
    </div> -->
  </div>
</template>

<script>
import {useCounterStore} from "@/stores/counter";
import {mapStores} from "pinia";

export default {
  data() {
    return {
      products: [],
      users: [],
      categories: [],
      orders: [],
      clients: [],
    };
  },
  computed: {
    ...mapStores(useCounterStore),
  },async mounted() {
    // const response = await fetch("http://localhost:3000/");

    const products = await fetch(
        "https://1f83-92-174-83-81.eu.ngrok.io/products"
    );
    const users = await fetch("https://1f83-92-174-83-81.eu.ngrok.io/users");
    const categories = await fetch(
        "https://1f83-92-174-83-81.eu.ngrok.io/categories"
    );
    const orders = await fetch("https://1f83-92-174-83-81.eu.ngrok.io/orders");
    const clients = await fetch(
        "https://1f83-92-174-83-81.eu.ngrok.io/clients"
    );

    const dataProducts = await products.json();
    const dataUsers = await users.json();
    const dataCategories = await categories.json();
    const dataOrders = await orders.json();
    const dataClients = await clients.json();

    this.products = dataProducts;
    this.users = dataUsers;
    this.categories = dataCategories;
    this.orders = dataOrders;
    this.clients = dataClients;

    // console.log(response.users);
  },
}
</script>
