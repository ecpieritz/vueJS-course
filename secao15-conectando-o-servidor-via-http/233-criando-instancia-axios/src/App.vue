<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
	</div>
</template>

<script>
export default {
  created() {
		this.$http.post('users.json', {
			name: 'Elsa',
			email: 'let_it_go_elsa@gmail.com'
		},
		).then(res => console.log(res))       
  },
}
</script>

<style>
body{
	background: linear-gradient(to right, #19276b 0%, #70136a 100%);
  }
#app {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #ffffff;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
  color: #FFCC70;
;
}
</style>
