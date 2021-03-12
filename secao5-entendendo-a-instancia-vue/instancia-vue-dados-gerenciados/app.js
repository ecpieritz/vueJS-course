const vm = new Vue({
   el: "#app",
   data: {
      title1: "Multi instância em Vue",
   },
   computed: {

   },
   watch: {

   },
   methods: {
      change(){
         this.title1 += '!!';
      }
   }

   
});

vm.newInfo = "teste!";
console.log(newInfo);
