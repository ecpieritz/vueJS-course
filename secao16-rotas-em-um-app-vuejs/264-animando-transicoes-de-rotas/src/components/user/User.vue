<template lang="">
  <div class="user">
    <h2>Users</h2>
    <hr>
    <router-view/>
    <button success @click="goToHome">Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome(){
      //this.$router.push('/')
      //this.$router.push({path: '/'})
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style lang="">
  
</style>