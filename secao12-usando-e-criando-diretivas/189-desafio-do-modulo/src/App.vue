<template>
	<div id="app">
		<h2>Diretivas (Desafio)</h2>
		<hr>

		<button v-when:click="action">Execute</button>

		<p v-when:mouseenter="mouseEnter" v-when:mouseleave="mouseLeave">Teste mouse event!</p>
	</div>
</template>

<script>
export default {
	directives: {
		when: {
			bind(el, binding){
				// el.onclick = function(e){
				// 	binding.value()
				// }

				const type = binding.arg
				const fn = binding.value
				el.addEventListener(type, fn)
			}
		}
	},
	methods: {
		action(){
			alert('Action successfully executed!')
		},
		mouseEnter(){
			console.log('Mouse enter')
		},
		mouseLeave(){
			console.log('Mouse leave')
		}
	},
}
</script>

<style>
body{
	background-color: #000;
	color: #fff;

}

h2{
	color: #720975;
}

#app {
	width: 95%;
	font-family: 'Itim', cursive;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	display: flexbox;
	flex-direction: column;
	text-align: center;
	margin: auto ;
	margin-top: 60px;
	font-size: 2.5rem;
}


button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	border: none;
	color: #FFF;
	background-color: #a248a5;
	cursor: pointer;
}

button:hover{
	color: rgb(196, 196, 196);
	background-color: #7f3281;

}
</style>
