<template>
  <div class="sticky w-full z-10 top-40">
    <!-- <div class="">X</div> -->
    <!-- form -->
    <div class="w-1/4 mx-auto bg-blue-200 px-10 py-5">
      <input type="hidden" name="_csrf" value="{{req.csrfToken()}}" />
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="Email"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="Password"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button @click="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</template>
<script>

export default {
  name: "Navbar",
  //   data() {
  //     return { Email: "", Password: "" };
  //   },
  //   setup() {
  //     let Email = ref(1);
  //     let Password = ref(1);
  //     return { Email, Password };
  //   },
  methods: {
    submit() {
      fetch("https://localhost:3000/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          cors:true  
        },
        body: JSON.stringify({ Email: "patrick@gmail", Password: "12321" }),
      });
    },
  },
};
</script>
