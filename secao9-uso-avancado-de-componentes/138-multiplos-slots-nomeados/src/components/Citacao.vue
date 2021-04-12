<template>
    <div class="citacao">
        <slot name="texto"></slot>
        <slot name="fonte"></slot>
        <slot name="autor"></slot>
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
