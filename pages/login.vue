<template>
  <div>
    <div class="min-h-screen flex items-center justify-center bg-blue-400" >

      <!-- login form -->
      <div class="bg-white p-10 rounded shadow-2xl w-1/3">

        <h2 class="text-3xl font-bold mb-10 text-gray-800">Login</h2>
          <div>
            <label class="block mb-1 font-bold text-gray-500">Email</label>
            <input id="name" v-model='email' type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
          </div>

          <div>
            <label class="block mb-1 font-bold text-gray-500">Kodeord</label>
            <input id="password" v-model='password' type="password" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
          </div>

          <button class="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300" @click="login">Sign Up</button>

      </div>

    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    async login() {
      /* Request CSRF token */
      await this.$axios.get(`/api/${'sanctum/csrf-cookie'}`)
        .then(res => {
          /* CSRF request failed, shouldn't happen. */
          if (res.status !== 204) {
            // eslint-disable-next-line no-console
            console.error('CSRF failed', res);
            return;
          }

          /* Send login request */
          this.$axios.post(`/api/${'login'}`, {
            'email': this.email,
            'password': this.password
          }, {
            validateStatus(status) {
              return status >= 200 && status <= 302
            }
          })
            .then(res => {
              /* Login successful */
              if (res.status === 200) {
                this.$store.commit('setUser', res.data)
                this.$router.push('/')
              }

              /* Login failed */
            })
            .catch(function(error) {
              /* Login failed */
              return error;
            })
        })
    },
  },
}
</script>


