<template>
  <div class="title font-bold">
    <h1>Commands</h1>
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
              {{ orders.products[0].quantity }}
            </div>
          </td>
          <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
            {{ orders.total_price }}€
          </td>
          <td
            v-if="orders.status === 0"
            class="py-4 px-6 font-semibold text-gray-900 dark:text-white"
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
              class="feather feather-refresh-cw"
            >
              <polyline points="23 4 23 10 17 10"></polyline>
              <polyline points="1 20 1 14 7 14"></polyline>
              <path
                d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
              ></path>
            </svg>
          </td>
          <td
            v-if="orders.status === 1"
            class="py-4 px-6 font-semibold text-gray-900 dark:text-white"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </td>
          <td
            v-if="orders.status === 2"
            class="py-4 px-6 font-semibold text-gray-900 dark:text-white"
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
              class="feather feather-alert-triangle"
            >
              <path
                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
              ></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </td>
          <td class="py-4 px-6">
            <label
              class="font-medium text-red-600 dark:text-red-500 hover:underline"
              @click="deleteProducts(orders.id)"
              >Remove</label
            >
            /
            <label
              class="font-medium text-blue-600 dark:text-red-500 hover:underline"
              @click="getOrder(orders.id)"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropModify"
              >Modify</label
            >
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal Modify -->
    <div
      class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="staticBackdropModify"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
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
              Modify Status Orders
            </h5>
            <button
              type="button"
              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body relative p-4 flex flex-col">
            <form class="mb-6 form">
              <div class="mb-6">
                <label
                  for="status"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >Select an Status</label
                >
                <select
                  type="number"
                  v-model="orders.status"
                  id="status"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a status</option>
                  <option value="0">Payed</option>
                  <option value="1">Finish</option>
                  <option value="2">Cancel</option>
                </select>
              </div>
              <button
                class="text-white justify-center flex items-center bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                @click="updateOrders(orders.id)"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Modify status {{ orders.id }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- PAGINATION COMMANDES -->
  <div
    v-if="this.counterStore.totalOrder > 5"
    class="flex flex-col items-center mt-5"
  >
    <!-- Help text -->
    <span class="text-sm text-gray-700 dark:text-gray-400">
      Showing
      <span class="font-semibold text-gray-900 dark:text-white">{{
        this.counterStore.pageOrder
      }}</span>
      to
      <span class="font-semibold text-gray-900 dark:text-white">{{
        Math.ceil(this.counterStore.totalOrder / 5)
      }}</span>
      of
      <span class="font-semibold text-gray-900 dark:text-white">{{
        this.counterStore.totalOrder
      }}</span>
      Total of Commands
    </span>
    <!-- Buttons -->
    <div class="inline-flex mt-2 xs:mt-0">
      <button
        @click="prev()"
        class="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Prev
      </button>
      <button
        @click="next()"
        class="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapStores } from "pinia";
import { useCounterStore } from "@/stores/counter";
import axios from "axios";

export default {
  methods: {
    updateOrders(id) {
      console.log("status ma gl" + this.orders.status);
      axios
        .patch("http://localhost:3000/orders/" + id, {
          status: parseInt(this.orders.status),
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      // console.log(this.products);
      // console.log(id);
      // console.log(this.products.name);
      // console.log(this.products.id);
    },
    getOrder(id) {
      // const id = this.products[this.selectedProduct].id;

      axios.get("http://localhost:3000/orders/" + id).then((response) => {
        // const product = response.data;
        this.orders.id = response.data.id;
        this.orders.status = response.data.status;
      });
      console.log(this.orders);
      console.log(this.orders[0]);
    },
    prev() {
      if (this.counterStore.pageOrder > 1) {
        this.counterStore.decrementOrder();
      }
    },
    next() {
      if (this.counterStore.orders.length == 5) {
        this.counterStore.incrementOrder();
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
};
</script>