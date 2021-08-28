<template>
  <header>
    <div class="container">
      <router-link to="/" href=""><h2>FOODY</h2></router-link>
      <nav>
        <a href="">Home</a>
        <a href="">Foods</a>
        <a href="">Restaurants</a>
        <a href="">Offers</a>
        <a href="">Contact</a>
      </nav>
      <button class="hamburger">
        <div class="bar"></div>
      </button>
    </div>
  </header>

  <!-- <nav class="mobile-nav">
    <a href="#">Home</a>
    <a href="">Foods</a>
    <a href="">Restaurants</a>
    <a href="">Offers</a>
    <a href="">Contact</a>
  </nav> -->
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped lang="scss">
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #212121;

  .container {
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: #212121;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: #ffffff;
      font-size: 32px;

      @media (max-width: 1024px) {
        font-size: 28px;
      }

      @media (max-width: 767px) {
        font-size: 25px;
      }
    }

    nav {
      display: flex;
      align-items: center;
      display: grid;
      grid-gap: 30px;
      grid-template-columns: repeat(5, auto);

      @media (max-width: 767px) {
        display: none;
      }

      a {
        color: #ffffff;
        font-size: 20px;

        @media (max-width: 1024px) {
          font-size: 18px;
        }
      }
    }
  }
}

.hamburger {
  position: relative;
  display: block;
  width: 35px;
  cursor: pointer;

  appearance: none;
  background: none;
  outline: none;
  border: none;
}

.hamburger .bar,
.hamburger:before,
.hamburger:after {
  content: "";
  display: block;
  width: 100%;
  height: 5px;
  background-color: #fff;
  margin: 6px 0px;
  transition: 0.4s;
}

.hamburger.is-active:before {
  transform: rotate(-45deg) translate(-8px, 6px);
}

.hamburger.is-active:after {
  transform: rotate(45deg) translate(-9px, -8px);
}

.hamburger.is-active .bar {
  opacity: 0;
}

.mobile-nav {
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  min-height: 100vh;
  display: block;
  z-index: 98;
  background-color: #12002f;
  padding-top: 120px;
  transition: 0.4s;
}

.mobile-nav.is-active {
  left: 0;
}

.mobile-nav a {
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 0 auto 16px;
  text-align: center;
  padding: 12px 16px;
  background-color: #1f103f;

  color: #fff;
  text-decoration: none;
}

.mobile-nav a:hover {
  background-color: #24104f;
}

@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }

  .hamburger {
    display: none;
  }
}
</style>
