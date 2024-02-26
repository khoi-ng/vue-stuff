<template>
  <header><h1>Bookstore Book</h1></header>
  <main class="content">
    <article>
      <input v-model.trim="search" type="text" placeholder="search" />

      <section class="products">
        <BookCard v-for="(book, index) in booklist" :key="index" :book="book" />

        <div class="item error" v-if="search && !booklist.length">
          <p>No results found!</p>
        </div>
      </section>
    </article>
    <Footer />
  </main>
</template>

<script setup>
import BookCard from '../components/BookCard.vue';
import Footer from '../components/BookStoreFooter.vue';
import { ref, watch } from 'vue';
import books from '../data/booklist.json';

const booklist = ref(books);
const search = ref('');

watch(search, () => {
  booklist.value = books.filter((book) =>
    book.title.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<style scoped>
.products h2 {
  font-size: 2.5em;
}

.products {
  display: flex;
  flex-wrap: wrap;
}
</style>
