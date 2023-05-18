<template>
  <div id="app">
    <div class="demo-container mx-auto">
      <SearchableDropdown
        v-model="selectedFruit"
        :items="fruits"
      >
      </SearchableDropdown>
    </div>
  </div>
</template>

<script>
import SearchableDropdown from './components/SearchableDropdown.vue'

export default {
  name: 'App',
  components: {
    SearchableDropdown
  },
  data() {
    return {
      selectedFruit: null,
      fruits: [
        {
          id: 1,
          name: 'Apple',
          icon: '/icons/apple.svg',
        },
        {
          id: 2,
          name: 'Banana',
          icon: '/icons/banana.svg',
        },
        {
          id: 3,
          name: 'Blueberry',
          icon: '/icons/blueberry.svg',
        },
        {
          id: 4,
          name: 'Mango',
          icon: '/icons/mango.svg'
        },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

.demo-container {
  max-width: 256px;
}

</style>
