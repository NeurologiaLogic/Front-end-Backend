<template>
  <div class="w-full items-center">
    <!-- the navbar -->
    <nav class="container flex flex-row py-10 justify-center items-center">
      <!-- start -->
      <div class="first-ses justify-center mr-60">
        <ul class="flex flex-row">
          <li
            class="hover:underline hover:transition-transform transition ease-in-out delay-150 hover:text-translate-y-1 hover:text-scale-110 duration-300 ..."
          >
            Home
          </li>
          <li class="mx-2 hover:bg-blue-200">Products</li>
          <li class="hover:bg-blue-200">New Arivals</li>
        </ul>
      </div>
      <!-- mid -->
      <div class="second-sec justify-center font-bold">
        <h1 hover:bg-violet-400 focus:ring>EVERIIT</h1>
      </div>
      <!-- end -->
      <div class="third-sec justify-center flex flex-row ml-60">
        <i class="fa-solid fa-magnifying-glass hover:text-blue-200"></i>
        <i class="fa-solid fa-cart-shopping hover:text-blue-200 ml-2"></i>
        <div class="flex ml-2">
          <i class="fa-solid fa-circle-user hover:text-blue-200"></i>
          <h2 class="ml-2 hover:text-blue-200">Login/Register</h2>
        </div>
      </div>
    </nav>
      <!-- end of navbar -->
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
