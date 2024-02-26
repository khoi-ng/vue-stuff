<template>
  <footer>
    <div class="row-container">
      <div class="column contact-column">
        <h4>Contact</h4>
        <p>Address: Flensburg</p>
        <p>Phone: +49 000000 000000</p>
        <p>Email: SomeEmail@Email.com</p>
      </div>

      <div class="column company-column">
        <h4>Company</h4>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <a href="">Delivery</a>
        <a href="">Terms &amp; Conditions</a>
        <a href="">Impressum</a>
      </div>

      <div class="column account-column">
        <h4>Account</h4>
        <a href="">Sign In</a>
        <a href="">Log In</a>
        <a href="">View Cart</a>
        <a href="">Wishlist</a>
        <a href="">Track Order</a>
        <a href="">Help</a>
      </div>
    </div>
    <div class="row-container">
      <div class="row follow-row">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-youtube"></a>
        <a href="#" class="fa fa-pinterest"></a>
      </div>
    </div>
    <div class="copyright"><p>Copyright © 2024</p></div>
  </footer>
</template>

<style scoped>
/* Footer Books------------------------------------------------------- */
footer {
  /* position: absolute;
  left: 0;
  bottom: 0;
  width: 100%; */
  background-color: rgb(218, 218, 243);
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

footer .row-container .column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 20px;
}

footer .row-container .contact-column p {
  font-size: 13px;
  margin: 0 0 8px 0;
  padding: 0;
}

footer h4 {
  font-size: 14px;
  padding-bottom: 0px;
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

footer .follow-row a:hover {
  color: rgb(112, 112, 209);
}

footer .copyright {
  font-size: 13px;
  padding-bottom: 10px;
}
</style>
