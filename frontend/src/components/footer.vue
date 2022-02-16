<template>
  <div class="newsletter w-full relative">
    <img
      class="flex mx-auto cover fit"
      src="../assets/footer/newspaper.png"
      alt=""
      srcset=""
    />
    <h1 class="absolute font-bold text-4xl bottom-40 inset-x-5 right-40">
      Newsletter
    </h1>
    <div class="flex">
      <input
        type="text"
        class="w-32 absolute text-2xl bottom-20 inset-x-5 right-40"
      />
      <button class="bg-black-500">Subscribe</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "newsletter_footer",
};
</script>
