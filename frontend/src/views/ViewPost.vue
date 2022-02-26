<template>
  <div class="home">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Navbar />
    <!-- <Posts /> -->
    <div class="container">
      <!-- <h1>{{posts}}</h1> -->
      <!-- <div class="bg-blue-300" v-for="p in posts" :key="p.title"> -->
      <!-- have title
      author
      content
      tags -->
      <h1>{{ posts.title }}</h1>
      <p>{{ posts.author }}</p>
      <div v-html="posts.content"></div>
      <!-- {{p.tags}} -->
      <ul>
        <li v-for="t in posts.tags">{{ t }}</li>
      </ul>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/blog/navbar.vue";
export default {
  name: "ViewPost",
  components: {
    Navbar,
  },
  data() {
    return {
      posts: {},
    };
  },
  mounted() {
    fetch(`https://localhost:6969/api/posts/${this.$route.params.slug}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((meh) => (this.posts = meh))
      .catch((e) => {
        res.send(e);
      });
    //how to fetch json data from api
    // https://www.youtube.com/watch?v=7iDGJolHFmU
  },
};
</script>
