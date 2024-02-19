<template>
  <section class="contact">
    <header><h1>Contact</h1></header>
    <main class="content">
      <article>
        <div class="personal-infos">
          <h2>Information</h2>

          <div class="row">
            <div>Name:</div>
            <div>Duy Khoi Nguyen</div>
          </div>
          <div class="row">
            <div>Adress:</div>
            <div>St.-Jürgen-Straße 111, 24937 Flensburg</div>
          </div>
          <div class="row">
            <div>Mobile:</div>
            <div>+49 176 56342316</div>
          </div>
          <div class="row">
            <div>E-mail:</div>
            <div>KhoiNG123@t-online.de</div>
          </div>
          <div class="row">
            <div>Birthdate/place:</div>
            <div>10. January 1997 in Forchheim, DE</div>
          </div>
        </div>
      </article>
    </main>
    <Footer></Footer>
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
div h2 {
  display: flex;
  flex-direction: row;
}

.row {
  display: flex;
  flex-direction: row;
}

.row div p {
  margin: 0;
}

.row > div {
  margin-top: 6px;
}

.row > div:first-child {
  width: 200px;
}

.row > div:nth-child(2) {
  width: 440px;
}

article {
  position: relative;
  margin-bottom: 20px;
  align-items: center;
}

article div {
  font-size: 13px;
}

.content {
  text-align: left;
  width: 100%;
}

.contact {
  margin-top: 3em;
}

.personal-infos {
  align-content: center;
  margin: 0 30%;
  width: 660px;
}
</style>
