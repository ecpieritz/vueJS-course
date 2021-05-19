<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
    <Menu />
    <router-view name="menu"/>
    <transition enter-active-class="animated rubberBand" leave-active-class="animated rollOut">
      <router-view/>
    </transition>
    <router-view name="menuBtm"/>
	</div>
</template>

<script>
export default {
	
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
