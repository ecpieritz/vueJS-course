<template>
  <div class="counter">
    <span>{{ counter }}</span>
    <button @click="add">+</button>
    <button @click="subtract">-</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      counter: 0,
    }
  },
  methods: {
    add(){
      this.counter++
    },
    subtract(){
      this.counter--
    }
  },
}
</script>

<style>
 body{
   background-color: black;
   color: white;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }

.counter span{
  border-bottom: 1px solid #39a7da;
  height: auto;
  padding: 10px 25px;
}

 h1{
   text-align: center;
   color: #39a7da;
   font-weight: 900;
 }

 .counter button{
   height: 50px;
   width: 50px;
   font-size: 25px;
   border: none;
   border-radius: 10px;
   background-color: #a0daf5;
   color: #11597a;
   margin-left: 15px;
   cursor: pointer;
 }

 button:hover{
   background-color: #81bdda;
   color: #0a4561;
   
 }
</style>