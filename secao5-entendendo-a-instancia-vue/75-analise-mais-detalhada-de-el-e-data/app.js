const vm = new Vue({
   el: "#app",
   data: {
      title: "A more detailed analysis of $el and $data",
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
