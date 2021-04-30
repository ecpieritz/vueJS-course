<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"/>
		<p></p>
		<p></p>
	</div>
</template>

<script>
export default {
	
}
</script>

<style>
body{
	background-color: #000;
	color: #fff;
}

#app {
	font-family: 'Montserrat', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin-top: 60px;
	margin-left: 30px;
}

#app h1{
	color: #09708f;
	font-size: 3.5rem;
	text-align: center;
	margin-left: none;
}
</style>
