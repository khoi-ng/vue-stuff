<template>
  <header>
    <section id="booksview-banner">
      <div class="banner-content">
        <div class="banner-content-wrapper">
          <h1>Books</h1>
          <h2>Coupon: #LoveReading</h2>
        </div>
      </div>
    </section>
  </header>
  <main class="content">
    <section class="products">
      <article>
        <input v-model.trim="search" type="text" placeholder="search" />

        <section class="products">
          <BookPaginator
            :pageNumbers="paginatedBookList.length"
            v-on:getPage="getPage"
            v-on:getNextPage="getNextPage"
            v-on:getPrevPage="getPrevPage"
          >
            <!--  v-on:getPage="getPage" -->
            <!-- <template #data="{ data }">
              <h3>{{ data}}</h3>
             
            </template> -->
            <BookCard v-for="book in booklist" :key="book._id" :book="book" />
          </BookPaginator>
          <div class="item error" v-if="search && !booklist.length">
            <p>No results found!</p>
          </div>
        </section>
      </article>
    </section>
    <Footer />
  </main>
</template>

<script setup>
import BookPaginator from '../components/BookPaginator.vue';
import BookCard from '../components/BookCard.vue';
import Footer from '../components/BookStoreFooter.vue';
import { ref, watch } from 'vue';
import books from '../data/booklist.json';

const numberPerPagination = 32;
const paginatedBookList = splitArrayChunks(books, numberPerPagination);
const currentPage = ref(0);
const booklist = ref(paginatedBookList[currentPage.value]);
const search = ref('');

function getPage(pageNumber) {
  currentPage.value = pageNumber;
  booklist.value = paginatedBookList[currentPage.value];
  // console.log(paginatedBookList);
}

function getNextPage() {
  if (currentPage.value < paginatedBookList.length - 1) {
    currentPage.value = currentPage.value + 1;
    booklist.value = paginatedBookList[currentPage.value];
  }
}

function getPrevPage() {
  if (currentPage.value >= paginatedBookList.length - 1) {
    currentPage.value = currentPage.value - 1;
    booklist.value = paginatedBookList[currentPage.value];
  }
}

watch(search, () => {
  if (search.value === '') {
    booklist.value = paginatedBookList[currentPage.value];
  } else {
    // Todo create new booklist based on search with max 32 in one page
    booklist.value = books.filter((book) =>
      book.title.toLowerCase().includes(search.value.toLowerCase())
    );
  }
});

function splitArrayChunks(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
}
</script>

<style scoped>
#booksview-banner {
  background-image: url('../../../assets/bookstore/pexels-jonathan-borba-banner.jpg');
  background-position: bottom 46% right 20%;
  height: 25vh;
  width: 100%;
  background-size: cover;
}

.products h2 {
  font-size: 2.5em;
}

.products {
  display: flex;
  flex-wrap: wrap;
}

.banner-content h1 {
  margin: 0;
  padding: 0;
  font-size: 2.5em;
}

.banner-content {
  height: 100%;
  background-color: rgba(235, 222, 222, 0.3);
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

.banner-content-wrapper {
  padding: 1em;
  /* border: 0.01em solid black; */
  border-radius: 2px;
  background-color: rgba(243, 248, 245, 0.5);
  width: 300px;
  /* height: 90px; */
  margin: auto;
  border-radius: 10px;
}

/* .banner-content-wrapper h1,
.banner-content-wrapper h2 {
  color: rgb(8, 8, 8);
} */
</style>
