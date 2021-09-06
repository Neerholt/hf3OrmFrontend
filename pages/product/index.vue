<template>
<div>
  <div class="box-content h-602 w-602 p-4 ">
  <ul class="flex border-b p-px-20">
    <li class="-mb-px mr-1">
      <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-bold">Produkt</a>
    </li>
    <li class="mr-1">
      <nuxt-link to="/customer" class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">Kunder</nuxt-link>
    </li>
    <li class="mr-1">
      <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Fabrikant</a>
    </li>
    <li class="mr-1">
      <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Orders</a>
    </li>
  </ul>

    <nav class="bg-white-100 py-6">
      <div class="px-8 mx-auto">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <!--First nav-->
            <div class="hidden md:flex flex items-center space-x-1">
              <button @click="createProduct" class="shadow-md bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded">Opret produkt</button>
            </div>
          </div>
          <!--second nav-->
          <div class="hidden md:flex flex items-center space-x-1">
            <input class="shadow-md appearance-none rounded w-full py-3 px-8 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Søg..">
          </div>
        </div>
      </div>
    </nav>


  <!--Table-->
    <div class="box-content h-602 w-602">
  <table class="w-full whitespace-nowrap">
    <thead>
    <tr class="text-left font-bold">
      <th class="border px-6 py-4">Produkt ID</th>
      <th class="border px-6 py-4">Navn</th>
      <th class="border px-6 py-4">Pris</th>
      <th class="border px-6 py-4">Beskrivelse</th>
      <th class="border px-6 py-4">Status</th>
      <th class="border px-6 py-4 text-center">Læs</th>
      <th class="border px-6 py-4 text-center">Rediger</th>
      <th class="border px-6 py-4 text-center">Slet</th>
      <th class="border px-6 py-4 text-center">Vælg</th>

    </tr>
    </thead>
    <tbody id="insertionPoint">
      <tr v-for="product in products" :key="product.id" :product="product" class="bg-emerald-200">
        <td class="border px-6 py-4" id="iad">{{ product.id }}</td>
        <td class="border px-6 py-4">{{ product.name }}</td>
        <td class="border px-6 py-4">{{ product.price }}</td>
        <td class="border px-6 py-4 overflow-hidden overflow-ellipsis max-w-screen-sm">{{ product.description }}</td>
        <td class="border px-6 py-4">{{ product.status }}</td>

        <td class="border px-6 py-4 text-center" ><button @click="apiDelete(this.id)"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg></button></td>


        <td class="border px-6 py-4 text-center"><button><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg></button></td>

        <td class="border px-6 py-4 text-center"><button @click="apiDelete()"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg></button></td>

        <td class="border px-6 py-4 text-center"><input type="checkbox"></td>
      </tr>
    </tbody>
  </table>
    </div>
  </div>
</div>
</template>


<script>

import Swal from "sweetalert2";

export default {
  data(){
    return{
      products: [],
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
      const res = await this.$axios.$get("/api/api/products", config);
       this.products = res.data;
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
          this.$axios.$delete("/api/api/products/" + id)
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
    },

    createProduct(){
      const { value: formValues } =  Swal.fire({
        title: 'Opret et produkt',
        html:
          '<label for="swal-input1">Produkt navn</label>'+
          '<input id="swal-input1" class="swal2-input">' +
          '<input id="swal-input2" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value
          ]
        }
      })

      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }
    }


  },


    head(){
      return{
        title: 'Administrator | Produkt',
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
