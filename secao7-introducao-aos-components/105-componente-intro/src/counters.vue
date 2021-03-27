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

<style>
    
</style>