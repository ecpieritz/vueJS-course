<template lang="">
  <div class="user">
    <h2>Users</h2>
    <hr>
    <p><strong>Code: </strong> {{id}}</p>
    
    <button success @click="goToHome">Back</button>
  </div>
</template>

<script>
export default {
  data(){
    return{id: 
    this.$route.params.id
  }},
  methods: {
    goToHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style lang="">
  
</style>