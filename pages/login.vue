<template>
  <div>
    <div class="min-h-screen flex items-center justify-center bg-blue-400" >

      <!-- login form -->
      <div class="bg-white p-10 rounded shadow-2xl w-1/3">

        <h2 class="text-3xl font-bold mb-10 text-gray-800">Login</h2>

        <form @submit="login" class="space-y-5">

          <div>
            <label class="block mb-1 font-bold text-gray-500">Navn</label>
            <input type="text" id="name" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
          </div>

          <div>
            <label class="block mb-1 font-bold text-gray-500">Kodeord</label>
            <input type="password" id="password" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
          </div>

          <button class="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Sign Up</button>

        </form>

      </div>

    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      users: []
    }
  },

  methods:{
    login(){
      this.axios.post( 'hf3.binau.dev/login', {
        name: 'name',
        password: 'password'
      }, this.users)
      console.log(this.users);
    }
  }

};
</script>


