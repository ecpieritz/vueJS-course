<template>
  <div class="user-edit">
    <h3>User Edit</h3>
    <p><strong>Code: </strong> {{id}} / {{$route.params.id}}</p>
    <p><strong>Complete: </strong>{{$route.query.complete ? 'Yes': 'No'}}</p>
    <p><strong>Language: </strong>{{$route.query.language}}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
}
</script>

<style>

</style>

