<template>
	<div id="app">
		<h2>Filtros & Mixins</h2>
		<hr>
		<p>{{cpf}} sem o filtro</p>
		<p>{{cpf | cpf}} com o filtro</p>
	</div>
</template>

<script>
export default {
	filters:{
		cpf(valor){
			const arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data(){
		return{
			cpf: '60070080090'
		}
	}
}
</script>

<style>
body{
	background-color: #021324;
	color: #fff;
}
h2{
	color: #0a528d;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
