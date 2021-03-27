<template>
  <div id="app">
    <app-counters />
    <button class="btn-button">Button</button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
 body{
   background-color: black;
   color: white;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }

 .btn-button{
   display: flex;
   margin: 0 auto;
   width: auto;
   padding: 10px 20px;
   font-size: 25px;
   font-weight: 700;
   border: none;
   border-radius: 10px;
   background-color: #f5a0d2;
   color: #852d60;
   cursor: pointer;
 }

  .btn-button:hover{
    background-color: #d884b5;
   color: #681947;
 }
</style>