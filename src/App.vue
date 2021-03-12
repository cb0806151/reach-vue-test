<template>
  <div id="app">
    <ContractOffice msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ContractOffice from './components/ContractOffice.vue'

export default {
  name: 'App',
  components: {
    ContractOffice
  }
}
</script>

<style>
body {
  background: darkgray;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
