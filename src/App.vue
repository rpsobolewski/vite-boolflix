<script >
import { state } from './components/state'

export default {
  data() {

    return {
      state,
      searchQuery: "",
    }
  },

  methods: {
    searchMovies() {
      console.log("Search Query:", this.searchQuery);
      state.fetchFilms();
    },
  },

}


</script>

<template>
  <input type="text" v-model="state.searchQuery" placeholder="Inserisci un titolo">
  <button @click="searchMovies">Search</button>

  <div v-for=" film  in   state.films  ">
    <div class=" card h-100">


      <div class="card_data text-center">
        <h1>titolo: {{ film.title }}</h1>
        <h2> titolo originale: {{ film.original_title }}</h2>
        <span>{{ film.overview }}</span>
        <div>voto: {{ film.vote_average }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
