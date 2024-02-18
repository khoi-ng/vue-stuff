<template>
  <header id="bookstore-header">
    <a href="#/bookstore"><div class="nav-Logo">Bookstore</div></a>
    <ul id="bookstore-navbar">
      <li><router-link to="/bookstore">Home</router-link></li>
      <li><router-link to="/bookstore/books">Books</router-link></li>
      <li><router-link to="/bookstore/about">About</router-link></li>
    </ul>
  </header>
</template>

<style scoped>
#bookstore-header a {
  text-decoration: none;
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
  margin: 10px;
  background-color: #e3e6fe;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

#bookstore-navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}

#bookstore-navbar li {
  list-style: none;
  padding: 0 20px;
}

#bookstore-navbar li a {
  text-decoration: none;
  font-size: 16px;
  font-weight: 580;
  color: rgb(22 108 255);
}
</style>
