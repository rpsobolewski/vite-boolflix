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
    calculateStarRating(vote_average) {
      const maxStars = 5;
      const stelle_piene = Math.ceil(vote_average / 2);
      const stelle_vuote = maxStars - stelle_piene;
      return { stelle_piene, stelle_vuote };
    },

  },


  created() {

    this.searchMovies();
  },


}


</script>

<template>
  <header class="d-flex justify-content-between fixed-top ">
    <h1 class="logo p-2 ps-4">BOOLFLIX </h1><!-- logo -->
    <div class="nav p-3">




      <div class="input-group mb-3">
        <button class="btn btn-outline-secondary " type="button" @click="searchMovies"><svg class="fillWhite"
            xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg></button>
        <input type="text" class="form-control" v-model="state.searchQuery" placeholder="Inserisci un titolo"
          aria-label="Example text with button addon" aria-describedby="button-addon1">
      </div>

    </div>

  </header>



  <main>
    <h1 class="logo mt-5 p-5 text-center">FILMS</h1>
    <div class="d-flex  flex-wrap"><!-- film -->
      <div v-for=" film  in   state.films  " class="col-3 movie-container mt-4">
        <div>
          <div class=" text-center ">
            <img v-if="film.poster_path == null" src="./img/404.jpg" alt="">

            <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" alt="">


            <div class="movie-title">

              <h2>titolo: {{ film.title }}</h2>
              <h3>titolo originale: {{ film.original_title }}</h3>
              <p>FILM</p>
              <p>{{ film.overview }}</p>


              <span v-if="!lingue.includes(film.original_language)">lingua: {{ film.original_language
              }}</span>
              <img class="flag" src="../src/img/british.png" alt="en" v-if="film.original_language == 'en'">
              <img class="flag" src="../src/img/italian.png" alt="en" v-if="film.original_language == 'it'">
              <img class="flag" src="../src/img/spanish.png" alt="en" v-if="film.original_language == 'es'">
              <img class="flag" src="../src/img/french.png" alt="en" v-if="film.original_language == 'fr'">

              <div><!-- stelle -->
                <span v-for="stella in calculateStarRating(film.vote_average).stelle_piene">
                  <svg class="fillWhite" xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                </span>
                <span v-for="stella in calculateStarRating(film.vote_average).stelle_vuote">
                  <svg class="fillWhite" xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                  </svg>
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>


    <h1 class="logo mt-5 p-5 text-center">SERIES</h1>

    <div class="d-flex pt-5 flex-wrap"><!-- serie -->
      <div v-for=" serie  in   state.series  " class="col-3 movie-container mt-4">
        <div class="  ">


          <div class="card_data text-center">
            <img v-if="serie.poster_path == null" src="./img/404.jpg" alt="">
            <img :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path" alt="">


            <div class="movie-title">
              <h2>titolo: {{ serie.name }}</h2>
              <p>TV SERIES</p>
              <p>{{ serie.overview }}</p>


              <span v-if="!lingue.includes(serie.original_language)">lingua: {{ serie.original_language
              }}</span>
              <img class="flag" src="../src/img/british.png" alt="en" v-if="serie.original_language == 'en'">
              <img class="flag" src="../src/img/italian.png" alt="en" v-if="serie.original_language == 'it'">
              <img class="flag" src="../src/img/spanish.png" alt="en" v-if="serie.original_language == 'es'">
              <img class="flag" src="../src/img/french.png" alt="en" v-if="serie.original_language == 'fr'">



              <div><!-- stelle -->
                <span v-for="stella in calculateStarRating(serie.vote_average).stelle_piene">
                  <svg class="fillWhite" xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                </span>
                <span v-for="stella in calculateStarRating(serie.vote_average).stelle_vuote">
                  <svg class="fillWhite" xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  background-color: rgb(13, 13, 13);

}

main {
  background-color: rgb(13, 13, 13);

}



.star-icon {
  margin-right: 0.25rem;
}

.flag {
  height: 20px;
  aspect-ratio: 3/2;
}

.logo {
  font-family: 'Anton', sans-serif;
  font-family: 'Fira Sans', sans-serif;
  font-weight: bold;
  color: rgb(231, 6, 6);
}



.movie-container {
  position: relative;

  overflow: hidden;

}


.movie-title {
  position: absolute;
  top: 100%;

  left: 69px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  color: white;
  padding: 8px;

  opacity: 0;

  transition: opacity 0.3s ease;
  width: 342px;
  height: 513px;

}

/* Show the text on hover */
.movie-container:hover .movie-title {
  top: 0;

  opacity: 1;

}

.fillWhite {
  fill: white;
}
</style>