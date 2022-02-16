<template>
  <!-- title -->
  <div class="w-full items-center px-20 flex flex-col">
    <h1 class="block mx-auto my-10 font-bold underline-offset-8 underline">
      Our Collection
    </h1>
    <!-- collection -->
    <nav class="container w-full grid grid-cols-4 gap-4 place-items-center">
      <div class="flex flex-col">
        <!-- image -->
        <img
          class="w-16 md:w-32 lg:w-48"
          src="../assets/collections/col_1.jpg"
        />
        <!-- title -->
        <h1>tee</h1>
      </div>
      <div class="flex flex-col">
        <img
          class="w-16 md:w-32 lg:w-48"
          src="../assets/collections/col_2.jpg"
        />
        <h1>sweater</h1>
      </div>
      <div class="flex flex-col">
        <img
          class="w-16 md:w-32 lg:w-48"
          src="../assets/collections/col_3.jpg"
        />
        <h1>top</h1>
      </div>
      <div class="flex flex-col">
        <img
          class="w-16 md:w-32 lg:w-48"
          src="../assets/collections/col_4.jpg"
        />
        <h1>dress</h1>
      </div>
      <div class="flex flex-col">
        <img
          class="w-16 md:w-32 lg:w-48"
          src="../assets/collections/col_4.jpg"
        />
        <h1>pants</h1>
      </div>
      <div class="flex flex-col">
        <img
          class="w-16 md:w-32 lg:w-48"
          src="../assets/collections/col_3.jpg"
        />
        <h1>hijab</h1>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "picture_grid",
};
</script>
