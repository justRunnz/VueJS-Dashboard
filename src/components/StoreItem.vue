<template>
  <div class="title font-bold">
    <h1>Products</h1>
  </div>

  <div class="newItem">
    <!-- Button modal New product -->
    <button type="button"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Add new product
    </button>

    <!-- Modal new product -->
    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
         id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog relative w-auto pointer-events-none">
        <div
            class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div
              class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
              Add new product
            </h5>
            <button type="button"
                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body relative p-4 flex flex-col">
            <div  class="mb-6">
              <div class="mb-6">
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                <input type="text" id="title" v-model="formProduct.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Air Max " >
              </div>
              <div class="mb-6">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
                <textarea id="description" v-model="formProduct.description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write event description..."></textarea>
              </div>

              <div class="mb-6">
                <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image Link</label>
                <input type="text" id="image" v-model="formProduct.img" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://www.image-link.png" >
              </div>
              <div class="mb-6">
                <label for="color" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Color</label>
                <input type="text" id="color" v-model="formProduct.color" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Blue " >
              </div>
              <div class="mb-6">
                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                <input type="text" id="price" v-model="formProduct.price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" 436 " >
              </div>
              <div class="mb-6">
                <label for="stock" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stock</label>
                <input type="text" id="stock" v-model="formProduct.stock" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" 123 " >
              </div>
              <button type="submit" class="text-white justify-center flex items-center bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      data-bs-dismiss="modal" data-bs-target="#staticBackdrop" @click="AddProducts"><svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                Add new product </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Product table -->

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
          <label  class="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer " @click="deleteProducts(product.id)">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </label>
          <label class="font-medium text-blue-600 dark:text-red-500 hover:underline cursor-pointer" @click="getProduct(product.id)" data-bs-toggle="modal" data-bs-target="#staticBackdropModify">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </label>
        </td>
      </tr>

      </tbody>
    </table>

    <!-- Modal Modify -->
    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
         id="staticBackdropModify" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog relative w-auto pointer-events-none">
        <div
            class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div
              class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
              Modify product
            </h5>
            <button type="button"
                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body relative p-4 flex flex-col">
            <form  class="mb-6 form">
              <div class="mb-6">
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                <input type="text" id="title" v-model="products.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
              </div>
              <div class="mb-6">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
                <textarea id="description" v-model="products.description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
              </div>

              <div class="mb-6">
                <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image Link</label>
                <input type="text" id="image" v-model="products.img" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
              </div>
              <div class="mb-6">
                <label for="color" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Color</label>
                <input type="text" id="color" v-model="products.color" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
              </div>
              <div class="mb-6">
                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                <input type="text" id="price" v-model="products.price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
              </div>
              <div class="mb-6">
                <label for="stock" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stock</label>
                <input type="text" id="stock" v-model="products.stock" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
              </div>
              <button class="text-white justify-center flex items-center bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                   @click="updateProduct(products.id)"   ><svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                Modify product {{products.id}}</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "@/stores/counter.js";
import {mapState, mapStores} from "pinia";
import axios from "axios";

export default {
  data() {
    return {
      selectedProduct: null,
      formProduct: {
        id: null,
        name: '',
        price: null,
        stock: null,
        img: '',
        description: '',
        color: '',
      },

    }
  },
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

    AddProducts() {
      axios.post(`http://localhost:3000/products`,
          {
            id: this.products.slice(-1)[0].id + 1,
            name: this.formProduct.name,
            img: this.formProduct.img,
            description: this.formProduct.description,
            color: this.formProduct.color,
            price: this.formProduct.price,
            stock: this.formProduct.stock,
          }
      ).then((response) => {
        this.products.push(response.data);
      }).catch((error) => {
        // error.response.status Check status code
        console.log(error);
      });
    },

    updateProduct(id) {
      axios.put("http://localhost:3000/products/" + id, {
            name: this.products.name,
            img: this.products.img,
            description: this.products.description,
            color: this.products.color,
            price: this.products.price,
            stock: this.products.stock,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      console.log(this.products);
      console.log(id);
      console.log(this.products.name);
      console.log(this.products.id);
    },

    getProduct(id) {
      // const id = this.products[this.selectedProduct].id;

      axios.get("http://localhost:3000/products/" + id).then((response) => {
        // const product = response.data;
        this.products.id = response.data.id;
        this.products.name = response.data.name;
        this.products.img = response.data.img;
        this.products.description = response.data.description;
        this.products.price = response.data.price;
        this.products.stock = response.data.stock;
        this.products.color = response.data.color;
      });
      console.log(this.products);
      console.log(this.products[id]);
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

  .newItem {
    margin: 2em 0;
  }
</style>