new Vue({
   el: '#app',
   data: {
       title: 'Ciclo de Vida'
   },
   beforeCreate() {
       console.log('Antes de Criar')
   },
   created() {
       console.log('Criado')
   },
   beforeMount() {
       console.log('Antes de Montar (DOM)')
   },
   mounted() {
       console.log('DOM Montada')
   },
   beforeUpdate() {
       console.log('Antes de Atualizar')
   },
   updated() {
       console.log('Atualizado')
   },
   beforeDestroy() {
       console.log('Antes de destruir')
   },
   destroyed() {
       console.log('Destruido')
   }
})