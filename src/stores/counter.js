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
            const products = await fetch("https://1f83-92-174-83-81.eu.ngrok.io/products");
            const dataProducts = await products.json();
            this.products = dataProducts;
            //   console.log(this.products);
        },
        async fetchUsers() {
            const users = await fetch("https://1f83-92-174-83-81.eu.ngrok.io/users");
            const dataClients = await users.json();
            this.users = dataClients;
            //   console.log(this.products);
        },
    },
});