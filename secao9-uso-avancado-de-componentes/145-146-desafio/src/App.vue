<template>
	<div id="app">
		<span>
			<button class="pink" @click="componente = 'Pink'">Pink</button>
			<button class="cinza" @click="componente = 'Cinza'">Cinza</button>
			<button class="azul" @click="componente = 'Azul'">Azul</button>
		</span>
		
		<keep-alive>
			<component :is="componente">
				<div slot="conteudo-pink">
					<button class="btn-interno" @click="numero --">-</button>
					<button class="btn-interno" @click="numero ++">+</button>
					<h2>{{numero}}</h2>
				</div>

				<div slot="conteudo-cinza">
					Conteúdo do Componente <strong>{{componente}}</strong>
				</div>

				<div slot="conteudo-azul">
					<h3>Nome: {{nome}}</h3>
					<h3>Idade: {{idade}}</h3>
					<div class="div-conteudo">
						<h4><a href="https://www.linkedin.com/in/ecpieritz/" target="_blank" rel="noopener noreferrer">Linkedin</a></h4>
						<h4><a href="https://github.com/ecpieritz" target="_blank" rel="noopener noreferrer">Github</a></h4>
					</div>
				</div>
			</component>
		</keep-alive>
	</div>
</template>

<script>
import Pink from './components/Pink.vue'
import Cinza from './components/Cinza.vue'
import Azul from './components/Azul.vue'

export default {
	name: 'app',
	components: { Pink, Cinza, Azul },
	data(){
		return {
			componente: 'Pink',
			numero: 0,
			nome: 'Emilyn',
			idade: 29	
		}
	}
}
</script>

<style>
	body{
		background-color: black;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin: auto;
		margin-top: 60px;
		max-width: 90%;
	}

	button {
		padding: 10px;
		color: #FFF;
		font-size: 1.3rem;
		margin: 0 5px 10px 5px;
		cursor: pointer;
	}
	
	h2{
		margin: 10px 0;
	}

    .caixa {
        color: #FFF;
        font-size: 1.8rem;
        padding: 25px;
		margin: 20px 0px;
    }

	.pink {
        border: 2px solid #830037;
        background-color: #ce1f68;
		border-radius: 8px;
    }

	.cinza {
        border: 2px solid #6e6e6e;
        background-color: #999999;
		border-radius: 8px;
    }

	.azul {
        border: 2px solid #003479;
        background-color: #1d58a7;
		border-radius: 8px;
    }

	.btn-interno{
		width: 50px;
		height: 50px;
		margin: 10px 5px;
		border: none;
		border-radius: 10px;
		background-color: white;
		color: #2c3e50;
		font-size: 25px;
		font-weight: bold;
		cursor: pointer;
	}

	.div-conteudo{
		display: flex;
		justify-content: space-between;
		width: 50%;
		margin: auto;
	}

	.div-conteudo h4{
		margin-top: 0;
	}
</style>
