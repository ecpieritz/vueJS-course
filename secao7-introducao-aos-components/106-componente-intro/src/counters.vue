<template>
    <div class="counters">
        <h1>COUNTERS</h1>
        <app-counter v-for="c in 5" :key="c" />
    </div>
</template>

<script>
import Counter from './counter.vue' //registrado localmente

export default {
    components:{
        'app-counter': Counter
    }
}
</script>

<style scoped>
.counters{
    border: 1px solid #39a7da;
    border-radius: 10px;
    padding: 0 15px;
    width: 70%;
    margin: 50px auto ;

}

h1{
   text-align: center;
   color: #39a7da;
   font-weight: 900;
 }
</style>