<script setup>
// Modified version of https://github.com/harblaith7/Vue3-Crash-Course/blob/main/02-Notes/src/App.vue
// Added:
// - Save Notes in Webstorrage,
// - Delete Notes from Webstorage
// - Edit Note in Webstorage
// - sort Notes by Newest/Oldest

import { ref, toRaw } from 'vue';

const showModal = ref(false);
const showEditModal = ref(false);
const newNote = ref('');
const editNoteText = ref('');
const notes = ref([]);
const localStorageNotesKey = 'localStorageNotes';

const currentEditNoteID = ref('');

function getRandomColor() {
  const color = 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
  return color;
}

const addNote = () => {
  const note = {
    id: Math.floor(Math.random() * 100000),
    text: newNote.value,
    color: getRandomColor(),
    date: new Date(),
  };

  notes.value.push(note);

  cancelNote();

  // add Notes to LocalStorage
  if (localStorage.getItem(localStorageNotesKey) === null) {
    localStorage.setItem(
      localStorageNotesKey,
      JSON.stringify(toRaw(notes.value))
    );
  } else {
    let existingNotes = JSON.parse(localStorage.getItem(localStorageNotesKey));
    existingNotes.push(note);
    localStorage.setItem(localStorageNotesKey, JSON.stringify(existingNotes));
  }
};

const cancelNote = () => {
  showModal.value = false;
  newNote.value = '';
};

const cancelEdit = () => {
  showEditModal.value = false;
  editNoteText.value = '';
  currentEditNoteID.value = '';
};

//load notes from LocalStorage
const loadLocalStorageNotes = () => {
  if (
    notes.value.length == 0 &&
    localStorage.getItem(localStorageNotesKey) !== null
  ) {
    let existingNotes = JSON.parse(localStorage.getItem(localStorageNotesKey));
    existingNotes.map((note) => {
      notes.value.push({
        ...note,
        date: new Date(note.date),
      });
    });
  }
};
loadLocalStorageNotes();

const editNoteModalPopulate = (noteText, noteID) => {
  editNoteText.value = noteText;
  currentEditNoteID.value = noteID;
  showEditModal.value = true;
};

const editNote = () => {
  console.log('editNoteText', editNoteText.value);

  notes.value.map((note) => {
    if (note.id == currentEditNoteID.value) {
      note.text = editNoteText.value;
    }
  });

  // update Localstorage
  localStorage.setItem(
    localStorageNotesKey,
    JSON.stringify(toRaw(notes.value))
  );
  cancelEdit();
};

const deleteNote = () => {
  notes.value = notes.value.filter(
    (note) => note.id !== currentEditNoteID.value
  );
  // update Localstorage
  localStorage.setItem(
    localStorageNotesKey,
    JSON.stringify(toRaw(notes.value))
  );
  cancelEdit();
};
</script>

<template>
  <main>
    <div
      v-if="showModal"
      class="overlay overlayAdd"
      @click="showModal = false"
    ></div>

    <div v-if="showModal" class="modal">
      <p @click="showModal = false">x</p>
      <textarea v-model="newNote" />
      <button class="addBtn" @click="addNote">Add Note</button>
      <button class="cancelBtn" @click="cancelNote">Cancel Note</button>
    </div>

    <div
      v-if="showEditModal"
      class="overlay overlayEdit"
      @click="cancelEdit"
    ></div>

    <div v-if="showEditModal" class="modal">
      <p @click="cancelEdit">x</p>
      <textarea v-model="editNoteText" />
      <button class="EditBtn" @click="editNote">Edit Note</button>
      <div class="flex-row">
        <button class="cancelBtn" @click="cancelEdit">Cancel Edit</button>
        <button class="deleteBtn" @click="deleteNote">Delete Note</button>
      </div>
    </div>

    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <!-- :style="{ backgroundColor: note.color }" -->
        <div
          v-for="note in notes"
          class="card"
          :key="note.id"
          @click="editNoteModalPopulate(note.text, note.id)"
        >
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString('en-US') }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}

.card {
  width: 800px;
  min-height: 100px;
  max-height: 200px;
  padding: 10px;
  border-radius: 15px;
  /* background-color: rgb(255, 255, 255); */
  background-image: url('../../assets/notes/papier-textur-hintergrund.jpg');
  background-size: 500px;
  /* background-size: cover; */
  border: black solid 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;

  /* text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; */
}

textarea {
  background-image: url('../../assets/notes/papier-textur-hintergrund-opique.png');
  background-size: 600px;
  border-radius: 5px;
  border-color: cornflowerblue;
}

.main-text {
  line-height: 1.25;
  font-size: 17.5px;
  font-weight: bold;
}

.date {
  font-size: 12.5px;
  margin-top: auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 1000px;
  color: white;
  font-size: 20px;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
}

.overlay {
  /* https://stackoverflow.com/questions/65985704/css-styling-100-100vh-wont-cover-pass-view-height */
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

main {
  height: 100vh;
  width: 100vw;
}

.modal {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.77);
  transform: translate(50%, 50%);
  z-index: 10;
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
}

.modal .addBtn {
  background-color: blueviolet;
}

.modal .cancelBtn {
  background-color: rgb(240, 110, 110);
}

.modal .deleteBtn {
  background-color: rgb(236, 61, 61);
}

.modal p {
  margin-left: auto;
  margin-top: auto;
  font-size: 20px;
  z-index: 100000;
  cursor: pointer;
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.modal > .flex-row > button {
  width: 50%;
  margin-top: 5px;
}

textarea {
  width: 100%;
  height: 200px;
  font-size: 20px;
  border: 1px black solid;
}
</style>
