<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Name:">
				<b-form-input type="text" size="lg" v-model="user.name" placeholder="Enter the name..."></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="text" size="lg" v-model="user.email" placeholder="Enter the email..."></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="save" size="lg" variant="primary">Save</b-button>
		</b-card>
	</div>
</template>

<script>
export default {
	data(){
		return{
			user: {
				name: '',
				email: ''
			}
		}
	},
	methods: {
		save(){
			this.$http.post('users.json', this.user).then(answer =>{
				this.user.name = ''
				this.user.email = ''

			})
		}
	},
//   created() {
// 		this.$http.post('users.json', {
// 			name: 'Elsa',
// 			email: 'let_it_go_elsa@gmail.com'
// 		},
// 		).then(res => console.log(res))       
//   },
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
	color: #0e1849;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
  color: #FFCC70;
;
}
</style>
