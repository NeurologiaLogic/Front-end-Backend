<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ $route.params.ee }}</h1>
    <!-- topnavbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- topnavbar -->
    <button @click="fetchMe()">PressMe</button>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  setup() {},
  methods: {
    async fetchMe() {
      // e.preventDefault();
      const header = {
        "Content-Type": "text/plain",
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          user_id: 1,
        }),
      };
      const res = await fetch("http://localhost:3000/api", header);
      await console.log(res);
    },
  },
};
</script>
