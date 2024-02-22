<template>
  <footer>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="row-container">
      <div class="row follow-row">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a
          href="https://github.com/khoi-ng?tab=repositories"
          class="fa fa-github"
        ></a>
      </div>
    </div>
    <div class="copyright"><p>Copyright © 2024</p></div>
  </footer>
</template>

<style scoped>
footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(225, 242, 243);
}

footer .follow-row a:hover {
  color: rgb(112, 112, 209);
}

footer .copyright {
  font-size: 13px;
  padding-bottom: 2px;
}

footer .row-container {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  justify-content: center;
  margin: 0 auto;
  max-width: 1180px;
  padding: 10px 5px;
}

footer a {
  font-size: 13px;
  margin: 0 0 8px 0;
  text-decoration: none;
}

footer a:hover {
  color: rgb(14, 122, 28);
}

footer .follow-row a {
  font-size: 30px;
  color: rgb(27, 27, 36);
  margin-left: 12px;
}
</style>
