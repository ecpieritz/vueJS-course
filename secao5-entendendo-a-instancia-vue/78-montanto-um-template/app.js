const vm = new Vue({
   // template funciona apenas com 1 unico elemento. 
   // Caso precise de mais que 1, é bom usar uma div
   template:`
   <div>
      <h1>{{ title }}</h1>
      <button @click="change">Change</button> 
   </div>
   `,
   //el: "#app",
   data: {
      title: "Montando um template"
   },
   computed: {

   },
   watch: {

   },
   methods: {
      change(){
         this.title += '!!';
      }      
   }
});

//1ª forma de usar o $mount
//vm.$mount('#app')

//2ª forma de usar o $mount
vm.$mount()
document.querySelector('#app').appendChild(vm.$el)