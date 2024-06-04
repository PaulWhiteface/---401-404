<template>
  <NotFound />
</template>

<script>
import NotFound from './components/NotFound.vue'

export default {
  name: 'App',
  components: {
    NotFound
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap');

  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p, h1, h2, h3, ul, li, body, div, img {
    padding: 0;
    margin: 0;
  }
</style>
