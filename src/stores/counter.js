import { defineStore } from "pinia";
// import { apiFetchProducts } from "../api/apiFetch";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      products: [],
      users: [],
      orders: [],
      page: 1,
      totalItem: 0,
      pageOrder: 1,
      totalOrder: 0,
    };
  },
  actions: {
    async fetchProducts() {
      const products = await fetch("http://localhost:3000/products");
      const dataProducts = await products.json();
      this.products = dataProducts;
      //   console.log(this.products);
    },
    async fetchUsers() {
      const users = await fetch(
        "http://localhost:3000/users?_page=" + this.page + "&_limit=5"
      );
      const dataClients = await users.json();
      this.totalItem = users.headers.get("X-Total-Count");
      this.users = dataClients;
      //   console.log(this.products);
    },
    async fetchOrders() {
      const orders = await fetch(
        "http://localhost:3000/orders?_page=" + this.pageOrder + "&_limit=5"
      );
      const dataOrders = await orders.json();
      this.totalOrder = orders.headers.get("X-Total-Count");
      this.orders = dataOrders;
      // console.log(this.orders);
      // console.log(this.orders[0].products[0].product_id);
    },
    increment() {
      this.page++;
      this.fetchUsers();
    },
    decrement() {
      this.page--;
      this.fetchUsers();
    },
    incrementOrder() {
      this.pageOrder++;
      this.fetchOrders();
    },
    decrementOrder() {
      this.pageOrder--;
      this.fetchOrders();
    },
  },
});
