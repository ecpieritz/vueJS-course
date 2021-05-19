<template>
  <div class="user-edit">
    <h3>User Edit</h3>
    <p><strong>Code: </strong> {{id}} / {{$route.params.id}}</p>
    <p><strong>Complete: </strong>{{$route.query.complete ? 'Yes': 'No'}}</p>
    <p><strong>Language: </strong>{{$route.query.language}}</p>
    <hr>
    <button primary @click="confirmed = true">Confirm</button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data(){
    return{
      confirmed: false
    }
  },
  beforeRouteLeave(to, from, next){
    if(this.confirmed){
      next()
    } else{
      if(confirm('Are You Sure?')){
        next()
      }else{
        next(false)
      }
    }
  }
}
</script>

<style>

</style>

