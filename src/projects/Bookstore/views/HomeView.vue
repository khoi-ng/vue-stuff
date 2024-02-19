<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <main class="content">
    <section id="hero">
      <div class="hero-content">
        <div class="hero-content-wrapper">
          <h4>Reading is for Everyone</h4>
          <h1>Reading is an Adventure</h1>
          <h1>Books on Sale</h1>
          <p>Save up to 80% !</p>
          <button>Buy Books</button>
        </div>
      </div>
    </section>
    <section id="featured-products" class="featured-products">
      <h2>Popular Books</h2>
      <div class="book-container">
        <div class="book-card">
          <div class="book-img-container">
            <img
              src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg"
              alt=""
            />
          </div>
          <div class="book-shortinfo">
            <p class="book-author">
              W. Frank Ableson, Charlie Collins, Robi Sen
            </p>
            <p class="book-title">Unlocking Android</p>
            <p class="book-category">Open Source, Mobile</p>
            <p class="book-price">39,99€</p>
          </div>
        </div>

        <div class="book-card">
          <div class="book-img-container">
            <img
              src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg"
              alt=""
            />
          </div>
          <div class="book-shortinfo">
            <p class="book-author">
              W. Frank Ableson, Charlie Collins, Robi Sen
            </p>
            <p class="book-title">Unlocking Android</p>
            <p class="book-category">Open Source, Mobile</p>
            <p class="book-price">39,99€</p>
          </div>
        </div>

        <div class="book-card">
          <div class="book-img-container">
            <img
              src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg"
              alt=""
            />
          </div>
          <div class="book-shortinfo">
            <p class="book-author">
              W. Frank Ableson, Charlie Collins, Robi Sen
            </p>
            <p class="book-title">Unlocking Android</p>
            <p class="book-category">Open Source, Mobile</p>
            <p class="book-price">39,99€</p>
          </div>
        </div>

        <div class="book-card">
          <div class="book-img-container">
            <img
              src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg"
              alt=""
            />
          </div>
          <div class="book-shortinfo">
            <p class="book-author">
              W. Frank Ableson, Charlie Collins, Robi Sen
            </p>
            <p class="book-title">Unlocking Android</p>
            <p class="book-category">Open Source, Mobile</p>
            <p class="book-price">39,99€</p>
          </div>
        </div>
      </div>
    </section>

    <section id="new-products" class="featured-products">
      <h2>New Books</h2>
      <div class="book-container">
        <div class="book-card">
          <div class="book-img-container">
            <img
              src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg"
              alt=""
            />
          </div>
          <div class="book-shortinfo">
            <p class="book-author">
              W. Frank Ableson, Charlie Collins, Robi Sen
            </p>
            <p class="book-title">Unlocking Android</p>
            <p class="book-category">Open Source, Mobile</p>
            <p class="book-price">39,99€</p>
          </div>
        </div>
      </div>
    </section>

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
  </main>
</template>

<style scoped>
/* Footer Books------------------------------------------------------- */
footer {
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

/* Featured Books------------------------------------------------------- */

.featured-products h2 {
  font-size: 2.5em;
}

.book-container {
  display: flex;
  flex-wrap: wrap;
}

.book-container .book-shortinfo p {
  margin: 0;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.book-container .book-shortinfo p.book-author {
  font-size: 0.8em;
  margin-top: 15px;
}

.book-container .book-shortinfo p.book-title {
  color: rgb(52, 122, 43);
  font-size: 0.9em;
  margin-top: 3px;
  font-weight: 700;
}

.book-container .book-shortinfo p.book-category {
  font-size: 0.8em;
  margin-top: 5px;
  font-weight: 700;
}

.book-container .book-shortinfo p.book-price {
  font-size: 0.9em;
  margin-top: 8px;
  font-weight: 700;
}

.book-container .book-img-container {
  /* border: 0.5px solid rgb(134, 134, 134); */
  box-shadow: 0 0 2px 2px rgba(88, 92, 88, 0.1);
  padding: 10px 12px;
  height: 180px;
  display: flex;
  align-items: center;
}

.book-container .book-card {
  border: 1px solid rgb(228, 227, 227);
  width: 10%;
  min-width: 150px;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.03);
  transition: 0.2s ease;
  margin: 10px;
}

.book-container .book-card:hover {
  box-shadow: 6px 6px 10px rgba(68, 175, 73, 0.07);
}

.book-container .book-card img {
  width: 100%;
  max-height: 180px;
}

/* Hero-------------------------------------------------------------------------------- */
#hero {
  text-align: left;
  background-image: url('../../../assets/bookstore/bookstore-Hero.jpg');
  height: 90vh;
  width: 100%;
  background-size: cover;
  /* background-position: top 25% right 0; */
  margin: auto;
}

.hero-content {
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
  padding: 0 80px;
  padding-top: 120px;
}

.hero-content h1 {
  margin: 0;
  padding: 0;
  font-size: 2.5em;
}

.hero-content-wrapper {
  padding: 1em;
  /* border: 0.01em solid black; */
  border-radius: 2px;
  background-color: rgba(235, 222, 222, 0.3);
}

.hero-content h4 {
  margin: 0;
  padding: 0;
  font-size: 1em;
}

#hero button {
  border: 0;
  background-color: rgba(84, 173, 72, 0.3);

  color: rgba(52, 100, 46, 1);
  border-radius: 1em;
  font-size: 0.79em;
  padding: 6px 16px 6px 16px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s ease;
}

#hero button:hover {
  /* background-color: rgba(52, 100, 46, 0.3); */
  background-color: rgba(126, 219, 114, 0.3);
}
</style>
