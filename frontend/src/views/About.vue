<template>
  <div class="about">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1>This is an about page</h1>
    <h1>{{ $route.params.ee }}</h1>

    <button @click="fetchMe()">PressMe</button>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
export default {
  setup() {},
  methods: {
    fetchMe() {
      // e.preventDefault();
      const header = {
        "Content-Type": "plain/text",
        method: "POST",

        body: JSON.stringify({
          user_id: 1,
        }),
      };
      const path = "https://localhost:3000";
      fetch(`${path}/api`, header).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
