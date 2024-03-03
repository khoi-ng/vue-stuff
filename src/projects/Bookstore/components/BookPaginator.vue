<template>
  <div class="pagination-row">
    <button class="pagination-button" @click="switchPrevPage()">
      previous
    </button>
    <span v-for="(item, index) in new Array(props.pageNumbers)" :key="index">
      <button class="pagination-button" @click="switchPage(index)">
        {{ index + 1 }}
      </button>
    </span>
    <button class="pagination-button" @click="switchNextPage()">next</button>
  </div>

  <!-- <slot name="slot_content" /> 
  https://stackoverflow.com/a/63688998/8842987 -->

  <slot></slot>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['pageNumbers']);

import { defineEmits } from 'vue';

const emit = defineEmits(['getPage', 'getNextPage', 'getPrevPage']);

const switchPage = (pageNumber) => {
  emit('getPage', pageNumber);
};

const switchNextPage = () => {
  emit('getNextPage');
};

const switchPrevPage = () => {
  emit('getPrevPage');
};
</script>

<style scoped>
.pagination-row {
  padding: 10px;
  width: 100%;
}
.pagination-button {
  margin: 2px;
}
</style>
