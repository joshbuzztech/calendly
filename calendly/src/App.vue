<template>
  <div id="app">
    
    <div class="container-fluid d-flex flex-column justify-content-center align-items-center flex-grow-1">
      <router-view class="w-100"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.75rem;
}

.navbar-nav .nav-link {
  font-size: 1.1rem;
}

.navbar-nav .nav-link:hover {
  color: #f8f9fa;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.container-fluid {
  flex-grow: 1;
}
</style>
