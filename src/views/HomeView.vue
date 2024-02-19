<template>
  <section class="home">
    <header><h1></h1></header>
    <main class="content">
      <div class="row-container">
        <div class="img-container">
          <img class="me" src="../assets/img/me2.png" alt="" />
          <!-- <div class="circle" id="circle0"></div>
          <div class="circle" id="circle1"></div>
          <div class="circle" id="circle2"></div> -->
        </div>

        <article class="about-myself">
          <h2>Welcome !</h2>
          <p class="hello">Hello,</p>
          <p style="margin-bottom: 40px">
            My name is Duy Khoi Nguyen &amp; I'm a Software Engineer, who
            graduated 2023 with a Bachelor degree in Computer Science at
            Flensburg University of Applied Sciences. This Project is a
            playground where I try out things with vue.js. Since Vue.js is one
            of the most popular Frameworks for webdevelopment I should be abit
            familiar with it.
          </p>
          <a href="#/projects">Check out my Vue Projects</a>
        </article>
      </div>
    </main>

    <Footer />
  </section>
</template>

<script>
import Footer from '../components/FooterComp.vue';

export default {
  components: {
    Footer,
  },
};
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  z-index: -3;
}

/* #circle0 {
  width: 280px;
  height: 280px;
  left: 19px;
  top: 10px;
  background-color: rgb(241, 243, 240);
  z-index: -2;
} */

/* #circle1 {
  left: 900px;
  top: -100px;
  background-color: rgb(137, 211, 103);
  z-index: 5;
} */

/* #circle2 {
  width: 150px;
  height: 150px;
  left: 250px;
  top: 150px;
  background-color: rgb(14, 74, 129);
} */

.img-container {
  position: relative;
}

.about-myself {
  font-size: 14px;
  background-color: rgb(255, 255, 255);
  /* border: 1px solid rgba(191, 236, 204, 0.9); */
  border-radius: 20px;
  padding: 6px;
  margin-left: 50px;
  z-index: 6;
  position: relative;
}

.about-myself .hello {
  font-size: 16px;
  font-weight: 700;
}

.about-myself h2 {
  font-size: 30px;
}

.about-myself a {
  text-decoration: none;
  /* color: darkgreen; */

  padding: 6px;
  font-size: 15px;
  border-radius: 4px;
  /* background-color: rgb(240, 192, 105); */
  /* position: absolute; */
  /* left: 450px;
  top: 260px; */
  transition: 0.2s ease;
}

.about-myself a:hover {
  color: darkgreen;
  /* background-color: rgb(219, 161, 53); */
}

.content {
  margin-top: 60px;
}

.row-container img.me {
  width: 300px;
  height: 270px;
  /* background-color: rgb(214, 229, 230);
  border-radius: 50%; */
  border-radius: 50%;
}

main {
  display: flex;
  align-items: center;
}

main .row-container {
  margin: auto;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
}
main .row-container article.about-myself {
  text-align: left;
  padding-left: 20px;
}
</style>
