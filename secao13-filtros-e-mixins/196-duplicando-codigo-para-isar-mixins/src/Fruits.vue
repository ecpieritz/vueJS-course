<template>
    <div>
        <ul>
            <li v-for="fruit in fruits" :key="fruit">{{fruit}}</li>
        </ul>
        <input type="text" v-model="fruit" @keydown.enter="add">
    </div>
</template>

<script>
export default {
    data(){
        return{
            fruit: '',
            fruits: ['banana', 'apple', 'orange']
        }
    },
    methods: {
        add(){
            this.fruits.push(this.fruit)
            this,fruit = ''
        }
    },
}
</script>

<style>
    
</style>