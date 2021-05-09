<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant='primary' class="mb-4" @click="display = !display">Show Message</b-button>
		
		<transition name="fade">
			<b-alert variant='info' show v-if="display">{{msg}}</b-alert>
		</transition>
	</div>
</template>

<script>

export default {
	data(){
		return {
			msg: 'Uma mensagem de informação para o usuário!',
			display: false
		}
	}
}
</script>

<style>
body{
	background-color: #2e2e2e;
}
h1{
	color: #0083fd;
	font-weight: 900;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin-top: 60px;
	color: #fff;
	font-size: 1.5rem;
}

.fade-enter,
.fade-leave-to{
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
	transition: opacity 2s;
}

</style>
