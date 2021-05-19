<template>
  <div class="user-edit">
    <h3>User Edit</h3>
    <p><strong>Code: </strong> {{id}} / {{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
}
</script>

<style>

</style>

