<template>
  <div class="user-detail">
    <h3>User Detail</h3>
    <hr>
    <p><strong>Code: </strong> {{id}}</p>
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

</style>

