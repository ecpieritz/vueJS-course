new Vue({
   el: '#app',
   data: {
      titulo: 'Usando Vue.js!!!'
   },
   methods: {
      alterarTitulo(event) {
         this.titulo = event.target.value;
      }
   }
});