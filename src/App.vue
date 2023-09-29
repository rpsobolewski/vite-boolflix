<script >

import { state } from './components/state'

export default {
  data() {

    return {
      state,
      searchQuery: "",
      lingue: ['en', 'it', 'es', 'fr'],

    }
  },

  methods: {
    searchMovies() {
      console.log("Search Query:", this.searchQuery);

      state.fetchFilms();
      state.fetchSeries();
    },

  },

}


</script>

<template>
  <input type="text" v-model="state.searchQuery" placeholder="Inserisci un titolo">
  <button @click="searchMovies">Search </button>



  <div v-for=" film  in   state.films  "><!-- film -->
    <div class=" card h-100">


      <div class="card_data text-center">
        <h1>titolo: {{ film.title }}</h1>
        <h2>titolo originale: {{ film.original_title }}</h2>

        <span v-if="!lingue.includes(film.original_language)">lingua: {{ film.original_language
        }}</span>
        <img class="flag" src="../src/img/british.png" alt="en" v-if="film.original_language == 'en'">
        <img class="flag" src="../src/img/italian.png" alt="en" v-if="film.original_language == 'it'">
        <img class="flag" src="../src/img/spanish.png" alt="en" v-if="film.original_language == 'es'">
        <img class="flag" src="../src/img/french.png" alt="en" v-if="film.original_language == 'fr'">



        <div>voto: {{ film.vote_average }}</div>
      </div>
    </div>
  </div>
  <div v-for=" serie  in   state.series  "><!-- serie -->
    <div class=" card h-100">


      <div class="card_data text-center">
        <h1>titolo: {{ serie.name }}</h1>


        <span v-if="!lingue.includes(serie.original_language)">lingua: {{ serie.original_language
        }}</span>
        <img class="flag" src="../src/img/british.png" alt="en" v-if="film.original_language == 'en'">
        <img class="flag" src="../src/img/italian.png" alt="en" v-if="film.original_language == 'it'">
        <img class="flag" src="../src/img/spanish.png" alt="en" v-if="film.original_language == 'es'">
        <img class="flag" src="../src/img/french.png" alt="en" v-if="film.original_language == 'fr'">



        <div>voto: {{ serie.vote_average }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flag {
  height: 20px;
  aspect-ratio: 3/2;
}
</style>
