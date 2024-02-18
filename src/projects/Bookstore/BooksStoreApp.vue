<template>
  <section>
    <BooksStoreNavbar />
    <!-- <header><h1>Bookstore</h1></header>
    <main class="content">
      <article>test</article>
    </main> -->

    <router-view></router-view>
  </section>
</template>

<script>
import BooksStoreNavbar from './components/BooksStoreNavbar.vue';

export default {
  name: 'BookStoreApp',
  components: {
    BooksStoreNavbar,
  },
};
</script>
