<template>
  <header id="header">
    <a href="#"
      ><img src="../assets/img/Vue.js_Logo_2.png" alt="" class="navbar-icon" />
      <div class="nav-Logo">ue</div>
    </a>

    <ul id="navbar">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/projects">Vue Projects</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'NavbarComponent',
};
</script>

<style scoped>
.navbar-icon {
  width: 30px;
  height: 30px;
}

#header a {
  text-decoration: none;
  display: flex;
}

#header a .nav-Logo {
  text-decoration: none;
  font-size: 2.1em;
  font-weight: 700;
  /* font-family: 'Lucida Handwriting'; */
  color: rgb(39, 39, 39);
}

#header {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 20px 80px;
  background-color: white;
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.07);
  border-radius: 2px;
  z-index: 444;
  position: relative;
}

#navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

#navbar li {
  list-style: none;
  padding: 0 50px;
  position: relative;
}

#navbar li a {
  text-decoration: none;
  font-size: 16px;
  /* color: rgb(22 108 255); */
  color: rgb(8, 34, 80);
  transition: 0.3s ease;
}

#navbar li a:hover,
#navbar li a.router-link-active {
  /* color: rgb(245, 130, 23); */
  color: rgb(33, 121, 52);
}

#navbar li a.router-link-active::after,
#navbar li a:hover::after {
  /* content: '....'; */
  content: '';
  width: 20%;
  height: 2px;
  background: rgb(52, 177, 69);
  position: absolute;
  /* bottom: -4px; */
  bottom: -5px;
  left: 50px;
  /* left: 20px; */
}
</style>
