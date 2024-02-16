<template>
  <section class="project">
    <header><h1>Vue projects</h1></header>
    <main>
      <!-- It contains an article -->
      <section>
        <input
          type="text"
          v-model.trim="searchFilter"
          placeholder="filter Projects"
          @keyup="filteredProjects()"
        />
        <div class="projects-container">
          <div
            class="item project"
            v-for="project in filteredProjects()"
            :key="project"
          >
            <p>{{ project }}</p>
          </div>
        </div>
        <div
          class="item error"
          v-if="searchFilter && !filteredProjects().length"
        >
          <p>No results found!</p>
        </div>
      </section>
    </main>
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

import { ref, reactive } from 'vue';

let searchFilter = ref('');

const dummyProjects = reactive(['project 1', 'project 2', 'project 3']);

function filteredProjects() {
  return dummyProjects.filter((project) =>
    project.toLowerCase().includes(searchFilter.value.toLowerCase())
  );
}
</script>

<style scoped>
.projects-container {
  display: flex;
}

.projects-container > .project {
  border: 0.01em black solid;
  background-color: #f1f1f1;
  margin: 0.7em;
  padding: 20px;
  font-size: 2em;
  cursor: pointer;
}
</style>
