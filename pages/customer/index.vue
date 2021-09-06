<template>
  <div>
    <div class="box-content h-602 w-602 p-4 ">
      <ul class="flex border-b p-px-20">
        <li class="-mb-px mr-1">
          <nuxt-link to="/product" class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">Produkt</nuxt-link>
        </li>
        <li class="mr-1">
          <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-bold">Kunder</a>
        </li>
        <li class="mr-1">
          <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Fabrikant</a>
        </li>
        <li class="mr-1">
          <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Orders</a>
        </li>
      </ul>


      <!--Table-->
      <table class="w-full whitespace-nowrap">
        <thead>
        <tr class="text-left font-bold">
          <th class="border px-6 py-4">Kunde ID</th>
          <th class="border px-6 py-4">Navn</th>
          <th class="border px-6 py-4">Læs</th>
          <th class="border px-6 py-4">Rediger</th>
          <th class="border px-6 py-4">Slet</th>
          <th class="border px-6 py-4">Vælg</th>


        </tr>
        </thead>
        <tbody id="insertionPoint">
        <tr v-for="customers in customers" :key="customers.id" :product="customers" class="bg-emerald-200">
          <td class="border px-6 py-4">{{ customers.id }}</td>
          <td class="border px-6 py-4">{{ customers.name }}</td>

          <td class="border px-6 py-4 text-center" ><button @click="apiDelete(this.id)"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg></button></td>


          <td class="border px-6 py-4 text-center"><button><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg></button></td>

          <td class="border px-6 py-4"><button @click="apiDelete"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg></button></td>

          <td class="border px-6 py-4"><input type="checkbox"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>

import Swal from "sweetalert2";

export default {
  data(){
    return{
      customers: [],
      id: ''
    }
  },

  async created() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };
    try {
      const res = await this.$axios.$get("/api/api/customers", config);
      this.customers = res.data;
    } catch (err) {
      console.log(err);
    }
  },

  methods:{
    apiDelete(id){
      Swal.fire({
        title: 'Er du sikker?',
        text: "Du vil ikke være i stand til at fortryde",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#098f28',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ja, slet produktet'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$axios.$delete("/api/api/products/5")
            .then(response => {
              Swal.fire(
                'Slette!',
                'Produktet er blevet slette.',
                'success',
              )
            })
            .catch(error =>{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
              })
            })
        }
      })
    }
  },


  head(){
    return{
      title: 'Administrator | Kunder',
    }
  }



}
</script>

<style>
/*
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
*/

</style>
