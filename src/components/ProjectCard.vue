<template>
  <div class="item project card" @click="navigateToProject()">
    <!-- https://stackoverflow.com/questions/40255291/vue-js-img-src-concatenate-variable-and-text
            https://stackoverflow.com/a/51084685/8842987 -->
    <img
      class="project-image"
      :src="
        require('@/assets/' +
          projectRef.project +
          '/' +
          projectRef.project +
          '.png')
      "
      alt=""
    />
    <h2 class="project-title">
      <!-- <router-link :to="project">{{
        project.toUpperCase()
      }}</router-link> -->
      {{ projectRef.project }}
    </h2>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

var projectRef = defineProps(['project']);

const router = useRouter();

const navigateToProject = () => {
  router.push(`/${projectRef.project}`);
};
</script>

<style scoped>
.card {
  width: 250px;
  height: 200px;
  border-radius: 15px;
  background-color: #f1f1f1;
  background-size: 500px;
  /* background-size: cover; */
  border: 0.01em black solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.card img {
  height: 140px;
  width: auto;
  margin: 0;
  padding: 5px;
}

.project-title {
  width: 100%;
  height: 100%;
  margin: auto;
  font-weight: bold;
  border-top: 1px solid black;
  padding-top: 10px;
  background-color: rgb(188, 188, 241);
}
</style>
