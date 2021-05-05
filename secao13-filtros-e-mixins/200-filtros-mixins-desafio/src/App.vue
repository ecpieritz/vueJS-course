<template>
	<div id="app">
		<h2>Filtros & Mixins (Desafio)</h2>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{quote | space-per-underline}}</p>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{quote | countWords}}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{quoteWithUnderline}}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p>{{quoteWithLength}}</p>
	</div>
</template>

<script>
import quotesMixin from './quotesMixin'
export default {
	data(){
		return{
			quote: 'This phrase will be used as a test.'
		}
	},
	filters: {
		spacePerUnderline(value){
			return value.replace(/\s/g, '_')
		}
	},
	mixins: [quotesMixin]
}
</script>

<style>
body{
	background-color: #272727;
	color: #fff;
}
h2{
	color: #e0357a;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin-top: 60px;
	font-size: 2rem;
}
</style>
