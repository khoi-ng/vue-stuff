<template>
  <section class="project">
    <header><h1>Vue Projects</h1></header>
    <main>
      <section>
        <input
          id="search-Project"
          type="text"
          v-model.trim="searchFilter"
          placeholder="Search Projects"
          @keyup="filteredProjects()"
        />
        <div class="projects-container">
          <ProjectCard
            v-for="project in filteredProjects()"
            :key="project"
            :project="project"
          />
        </div>
        <div
          class="item error"
          v-if="searchFilter && !filteredProjects().length"
        >
          <p>No results found!</p>
        </div>
      </section>

      <router-view></router-view>
    </main>
    <Footer />
  </section>
</template>

<script setup>
// ------------------- with options API-------------------

// export default {
//   data() {
//     return {
//       projects: [],
//       searchFilter: '',
//     };
//   },
//   methods: {
//     filteredProjects() {
//       return this.projects.filter((project) => {
//         return project.toLowerCase().includes(this.searchFilter.toLowerCase());
//       });
//     },
//   },
//   created() {
//     this.projects = ['project 1', 'project 2', 'project 3'];
//   },
// };

// ------------------- with composition API-------------------

import { ref, reactive, inject } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';
import Footer from '../components/FooterComp.vue';

let searchFilter = ref('');

const projectsList = inject('projectsList');

const projectsNameList = reactive(projectsList.map((project) => project.name));

function filteredProjects() {
  return projectsNameList.filter((project) =>
    project.toLowerCase().includes(searchFilter.value.toLowerCase())
  );
}
</script>

<style scoped>
.projects-container {
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap;
  padding: 10px;
  margin: 0 auto;
}

input#search-Project {
  margin-bottom: 20px;
}
</style>
