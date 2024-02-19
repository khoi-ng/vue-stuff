<template>
  <header id="bookstore-header">
    <a href="#/bookstore"
      ><img
        src="../../../assets/bookstore/leaves.png"
        alt=""
        class="bookstore-icon"
      />
      <div class="nav-Logo">Bookstore</div></a
    >
    <ul id="bookstore-navbar">
      <li><router-link to="/bookstore">Home</router-link></li>
      <li><router-link to="/bookstore/books">Books</router-link></li>
      <li><router-link to="/bookstore/about">About</router-link></li>
    </ul>
  </header>
</template>

<style scoped>
.bookstore-icon {
  width: 30px;
  height: 30px;
}

#bookstore-header a {
  text-decoration: none;
  display: flex;
}

#bookstore-header a .nav-Logo {
  text-decoration: none;
  font-size: 2.1em;
  font-weight: 700;
  font-family: 'Lucida Handwriting';
  color: rgb(39, 39, 39);
}

#bookstore-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 80px;
  /* margin: 10px 10px 0 10px; */
  background-color: #e3e6fe;
  /* background-color: #63689b; */
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);
  z-index: 444;
  position: relative;
}

#bookstore-navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}

#bookstore-navbar li {
  list-style: none;
  padding: 0 20px;
  position: relative;
}

#bookstore-navbar li a {
  text-decoration: none;
  font-size: 16px;
  font-weight: 580;
  /* color: rgb(22 108 255); */
  color: rgb(8, 34, 80);
  transition: 0.3s ease;
}

#bookstore-navbar li a:hover,
#bookstore-navbar li a.router-link-active {
  /* color: rgb(245, 130, 23); */
  color: rgb(52, 100, 46);
}

#bookstore-navbar li a.router-link-active::after,
#bookstore-navbar li a:hover::after {
  content: '....';
  width: 30%;
  /* height: 2px; */
  /* background: rgb(245, 130, 23); */
  position: absolute;
  /* bottom: -4px; */
  bottom: -5px;
  left: 15px;
  /* left: 20px; */
}
</style>
