<template>
  <!-- salah si harusnya bikin make css biasa  -->

  <div class="newsletter bg-cover h-64 flex flex-col pt-40">
    <!-- content -->
    <h1 class="newsletter-text font-bold sm:text-sm md:text-4xl pr-40">
      Newsletter
    </h1>
    <div class="flex flex-row mx-auto">
      <input
        type="text"
        class="text-box py-2 px-4 rounded-xl"
        placeholder="Email Here"
      />
      <button class="submit py-2 px-4 ml-2">Subscribe</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "newsletter_footer",
};
</script>

<style scoped>
.newsletter {
  background: url("../assets/footer/newspaper.png") no-repeat center center;
  /* border: 1px solid black; */
}
.newsletter-text {
  color: #434449;
}
.text-box {
  outline: none;
}
.submit {
  background-color: #434449;
  color: white;
}
</style>
