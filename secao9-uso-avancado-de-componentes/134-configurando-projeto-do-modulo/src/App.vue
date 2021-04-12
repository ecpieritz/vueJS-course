<template>
	<div id="app">
		<Citacoes />
		<Sobre />
	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'

export default {
	components: { Citacoes, Sobre }
}
</script>

<style>
	body{
		margin: 0;
		padding: 0;
	}
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 5px;
        margin: 10px 5px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: #55042a80;
		cursor: pointer;
    }
</style>