<template lang="">
  <div class="user">
    <h2>Users</h2>
    <router-view/>
    <button success @click="goToHome">Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style lang="">
  
</style>