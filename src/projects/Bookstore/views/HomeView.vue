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
        <BookCard
          v-for="(book, index) in popularBooks"
          :key="index"
          :book="book"
        />
      </div>
    </section>

    <section id="new-products" class="featured-products">
      <h2>New Books</h2>
      <div class="book-container">
        <BookCard v-for="(book, index) in newBooks" :key="index" :book="book" />
      </div>
    </section>

    <Footer />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import BookCard from '../components/BookCard.vue';
import books from '../data/booklist.json';
import Footer from '../components/BookStoreFooter.vue';

const booklist = ref(books);

const popularBooks = booklist.value.slice(20, 34);
const newBooks = booklist.value.slice(0, 7);
console.log('showbooks', newBooks);
</script>

<style scoped>
/* Featured Books------------------------------------------------------- */

.featured-products h2 {
  font-size: 2.5em;
}

.book-container {
  display: flex;
  flex-wrap: wrap;
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
