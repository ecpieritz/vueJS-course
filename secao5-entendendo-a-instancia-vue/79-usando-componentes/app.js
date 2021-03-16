Vue.component('comp',{
   template:`
   <div>
      <h1>{{ title }}</h1>
      <button @click="change">Change</button>
   </div>
   `,
   data: function(){
      return{
         title: 'Usando componentes'
      }
   },
   computed: {
   
   },
   watch: {
   
   },
   methods: {
      change(){
         this.title += "!"
      }
   }
})

new Vue({
   el: "#app"
});