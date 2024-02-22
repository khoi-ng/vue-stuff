<template>
  <div class="book-card">
    <div class="book-img-container">
      <img
        src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg"
        alt=""
      />
    </div>
    <div class="book-shortinfo">
      <p class="book-author">W. Frank Ableson, Charlie Collins, Robi Sen</p>
      <p class="book-title">Unlocking Android</p>
      <p class="book-category">Open Source, Mobile</p>
      <p class="book-price">39,99€</p>
    </div>
  </div>
</template>

<style scoped>
.book-shortinfo p {
  margin: 0;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.book-shortinfo p.book-author {
  font-size: 0.8em;
  margin-top: 15px;
}

.book-shortinfo p.book-title {
  color: rgb(52, 122, 43);
  font-size: 0.9em;
  margin-top: 3px;
  font-weight: 700;
}

.book-shortinfo p.book-category {
  font-size: 0.8em;
  margin-top: 5px;
  font-weight: 700;
}

.book-shortinfo p.book-price {
  font-size: 0.9em;
  margin-top: 8px;
  font-weight: 700;
}

.book-img-container {
  /* border: 0.5px solid rgb(134, 134, 134); */
  box-shadow: 0 0 2px 2px rgba(88, 92, 88, 0.1);
  padding: 10px 12px;
  height: 180px;
  display: flex;
  align-items: center;
}

.book-card {
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

.book-card:hover {
  box-shadow: 6px 6px 10px rgba(68, 175, 73, 0.07);
}

.book-card img {
  width: 100%;
  max-height: 180px;
}
</style>
