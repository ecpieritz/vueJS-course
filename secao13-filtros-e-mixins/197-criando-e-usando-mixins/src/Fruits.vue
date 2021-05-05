<template>
    <div>
        <ul>
            <li v-for="fruit in fruits" :key="fruit">{{fruit}}</li>
        </ul>
        <input type="text" v-model="fruit" @keydown.enter="add">
    </div>
</template>

<script>
import fruitsMixin from "./fruitsMixin.js";

export default {
   mixins: [fruitsMixin]
}
</script>

<style>
    
</style>