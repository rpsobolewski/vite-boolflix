<script >
import { state } from './components/state'

export default {
  data() {
    return {
      state,
    }
  },
  created() {
    state.fetchFilms()
  }

}


</script>

<template>
  ao
</template>

<style scoped></style>
