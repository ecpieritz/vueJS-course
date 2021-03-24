<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <button @click="title += ' :D'">Change</button>
  </div>
</template>

<script>
export default {
    data: function() {
      return{title: 'Testando...'
    }
  }
}
</script>

<style>
body{
  background-color: black;
  color: white;
}
#app {
  margin-top: 60px; 
}
</style>
