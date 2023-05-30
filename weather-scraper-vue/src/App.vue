<template >
  <div class="">
    <h1 class="py-10 text-5xl text-white bg-rose-400">Väder skrapare</h1>
    <weatherDisplay />
  </div>
</template>

<script>
import weatherDisplay from './components/weatherDisplay.vue'


export default {
  name: 'App',
  components: {
    weatherDisplay
  },
  data () {
    return {
      showButton: true
    }
  },
  methods: {
    hideButton () {
      this.showButton = false
    },
    weatherScrape () {

    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
