<template>
  <div class="right-container">
    <div class="productContainer">
      <div class="title font-bold">
        <h1>Users</h1>
      </div>

      <div class="newItem">
        <!-- Button modal New product -->

        <button
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop3"
        >
          Add new User
        </button>

        <!-- Modal new product -->
        <div
          class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="staticBackdrop3"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdrop3Label"
          aria-hidden="true"
        >
          <div class="modal-dialog relative w-auto pointer-events-none">
            <div
              class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
            >
              <div
                class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
              >
                <h5
                  class="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalLabel"
                >
                  Add new User
                </h5>
                <button
                  type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form class="modal-body relative p-4 flex flex-col">
                <div class="mb-6">
                  <div class="mb-6">
                    <label
                      for="title"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Username</label
                    >
                    <input
                      type="text"
                      id="title"
                      v-model="formProduct.username"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=" Write your username"
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="description"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >Email</label
                    >
                    <input
                      type="text"
                      id="title"
                      v-model="formProduct.email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=" Write your email"
                    />
                  </div>

                  <div class="mb-6">
                    <label
                      for="image"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >First name</label
                    >
                    <input
                      type="text"
                      id="image"
                      v-model="formProduct.firstname"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="https://www.image-link.png"
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="color"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Last name</label
                    >
                    <input
                      type="text"
                      id="color"
                      v-model="formProduct.lastname"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=" write your last name"
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="price"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Money</label
                    >
                    <input
                      type="number"
                      id="price"
                      v-model="formProduct.money"
                      class="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=" Write your money"
                    />
                  </div>
                  <button
                    type="submit"
                    class="text-white justify-center flex items-center bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    data-bs-dismiss="modal"
                    data-bs-target="#staticBackdrop"
                    @click="AddnewUser"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-user"
                    >
                      <path
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Add new users
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        class="overflow-x-auto relative shadow-md sm:rounded-lg productItemContainer"
      >
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
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
                <label
                  class="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                  @click="deleteClient(user.id)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-trash"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path
                      d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                    ></path>
                  </svg>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="inline-flex justify-center items-center mt-8 w-max">
        <button
          @click="prev()"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          Prev
        </button>

        <button
          @click="next()"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "@/stores/counter.js";
import { mapState, mapStores } from "pinia";
import axios from "axios";
export default {
  data() {
    return {
      formProduct: {
        id: null,
        username: "",
        email: "",
        firstname: "",
        lastname: "",
        money: null,
      },
    };
  },
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

    AddnewUser() {
      axios
        .post("http://localhost:3000/users", {
          id: this.users.slice(-1)[0].id + 1,
          username: this.formProduct.username,
          email: this.formProduct.email,
          firstname: this.formProduct.firstname,
          lastname: this.formProduct.lastname,
          money: this.formProduct.money,
        })
        .then((response) => {
          this.users.push(response.data);
        })
        .catch((error) => {
          // error.response.status Check status code
          console.log(error);
        });
    },
    prev() {
      if (this.counterStore.page > 1) {
        this.counterStore.decrement();
      }
    },
    next() {
      if (this.counterStore.products.length == 5) {
        this.counterStore.increment();
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