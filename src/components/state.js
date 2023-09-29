import axios from "axios";
import { reactive } from "vue";
export const state = reactive({
  films: null,

  fetchFilms() {
    let base_url = "https://api.themoviedb.org/3/search/movie";
    console.log("Search Query:", this.searchQuery);
    axios
      .get(base_url, {
        params: {
          api_key: "f72277928616c6e9caa7f4df2963dd14",
          query: this.searchQuery,
        },
      })

      .then((response) => {
        console.log(response);
        this.films = response.data.results;
        console.log(this.films);
      });
  },
});
