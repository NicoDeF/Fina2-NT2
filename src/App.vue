<template>
  <Text/>
  <Multiple/>
  
</template>

<script>

import Text from './components/Text.vue'
import Multiple from './components/Multiple.vue'


export default {
  name: 'App',
  components: {
    Text,
    Multiple
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>