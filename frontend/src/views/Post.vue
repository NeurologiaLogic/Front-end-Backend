<template>
  <div class="home">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <h1>HI</h1> -->
    <Navbar />
    <!-- <Posts/> -->
    <div class="container grid grid-cols-3 grid-row-2 gap-4">
      <div @click="redirectPage(p.slug)" class="bg-blue-300" v-for="p in posts" :key="p.title">
        <!-- have title
      author
      content
      tags -->
        <h1>{{ p.title }}</h1>
        <p>{{ p.author }}</p>
        <div v-html="p.content"></div>
        <!-- {{p.tags}} -->
        <ul>
          <li v-for="t in p.tags">{{ t }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/blog/navbar.vue";
// import posts from "@/components/blog/posts.vue";
// import picture_grid from "@/components/grid-collection.vue";
// import newsletter_footer from "@/components/footer.vue";
// import loginform from "@/components/login.vue";
import { ref } from "vue";
export default {
  name: "Post",
  components: {
    Navbar,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods:{
    redirectPage(params){
      console.log(params)
      this.$router.push(`/posts/${params}`)
    }
  },
  mounted() {
    fetch("https://localhost:6969/api/posts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => (this.posts = data))
      .catch((e) => {
        res.send(e);
      });
    //how to fetch json data from api
    // https://www.youtube.com/watch?v=7iDGJolHFmU
  },
};
</script>
