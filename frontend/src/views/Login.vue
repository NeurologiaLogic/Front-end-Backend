<template>
  <!-- <div class="container w-full items-center"> -->
   <form>
    <div class="form-group">
        <label for="inputEmail">Email</label>
        <input v-model="email" type="email" class="form-control" id="inputEmail" placeholder="Email">
    </div>
    <div class="form-group">
        <label for="inputPassword">Password</label>
        <input v-model = "password" type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
    <button @click="login" type="submit" class="btn btn-primary">Sign in</button>
</form>
</template>
<script>
import {ref} from 'vue'
export default {
  name: "Login",
  setup(){
      const email = ref('');
      const password = ref('');

      const login=async()=>{
        await fetch("https://localhost:6969/api/login",{
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email.value, password: password.value})
        })
      }

      return{email,password,login}
  }
};
</script>
