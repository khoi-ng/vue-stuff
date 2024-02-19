<template>
  <section class="about">
    <header><h1>About Page</h1></header>
    <main class="content">
      <article>
        This Project is a playground where I try out things with vue.js. Since
        Vue.js is one of the most popular Frameworks for Webdevelopment it
        should be abit familiar with it. When I want to get more into
        Webdevelopment.
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
.content {
  text-align: left;
  width: 80%;
}
.about {
  margin: 2em;
}
</style>
