<template>
  <div class="user-detail">
    <h3>User Detail</h3>
    <p><strong>Code: </strong> {{id}}</p>
    <router-link tag="button" primary :to="`/user/${id}/edit`">Edit</router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  // data(){
  //   return{id: 
  //   this.$route.params.id
  // }},
  // watch:{
  //   $route(to, from){
  //     this.id = to.params.id
  //   }
  // },
}
</script>

<style>
button{
  margin-bottom: 15px;
}
</style>

