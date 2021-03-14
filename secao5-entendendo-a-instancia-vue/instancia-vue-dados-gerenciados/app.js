const vm = new Vue({
   el: "#app",
   data: {
      title: "Multi instância em Vue",
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

vm.newInfo = "teste!";
console.log(vm.newInfo);
