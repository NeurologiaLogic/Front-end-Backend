<template>
  <div class="home">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Navbar />
    <img
      src="../assets/shirtEveryday.png"
      alt="homepage"
      class="flex mx-auto cover fit"
    />
    <picture_grid />
    <newsletter_footer />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/navbar.vue";
import picture_grid from "@/components/grid-collection.vue";
import newsletter_footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Navbar,
    picture_grid,
    newsletter_footer,
  },
};
</script>
