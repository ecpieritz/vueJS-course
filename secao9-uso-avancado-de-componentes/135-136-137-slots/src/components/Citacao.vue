<template>
    <div class="citacao">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        margin-top: 2vw;
        max-width: 450px;
    }
</style>
