<template>
  <Navbar />
  <router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #fafafa;
  // background-color: #e7e7e7;
  margin-top: 130px;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding-left: 128px;
  padding-right: 128px;

  @media (max-width: 1024px) {
    padding-left: 64px;
    padding-right: 64px;
  }

  @media (max-width: 767px) {
    padding-left: 32px;
    padding-right: 32px;
  }
}
</style>
