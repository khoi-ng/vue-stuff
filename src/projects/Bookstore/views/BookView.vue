<template>
  <header><h1>Book</h1></header>
  <main class="content">
    <article>
      <section class="product" v-if="book">
        <div class="book-img-container">
          <img :src="book.thumbnailUrl" alt="" />
        </div>
        <div class="book-shortinfo">
          <p class="book-author">{{ book.authors.join(', ') }}</p>
          <p class="book-title">{{ book.title }}</p>
          <p class="book-category">{{ book.categories.join(', ') }}</p>
          <p class="book-title">{{ book.longDescription }}</p>
          <p class="book-price">39,99€</p>
        </div>
      </section>
      <section class="product" v-else>
        <p>Book Not Found !</p>
      </section>
    </article>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
import books from '../data/booklist.json';

const route = useRoute();
const book = books.find((book) => book._id === parseInt(route.params.id));
</script>
