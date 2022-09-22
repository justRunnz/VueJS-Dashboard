import { defineStore } from "pinia";
// import { apiFetchProducts } from "../api/apiFetch";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      products: [],
      users: [],
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
      const users = await fetch("http://localhost:3000/users");
      const dataClients = await users.json();
      this.users = dataClients;
      //   console.log(this.products);
    },
  },
});
