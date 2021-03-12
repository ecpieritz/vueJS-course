new Vue({
   el: "#app1",
   data: {
      title1: "Multi instância em Vue",
   },
   computed: {

   },
   watch: {

   },
   methods: {

   }
});

new Vue({
   el: "#app2",
   data: {
      title2: "Testado por ecpieritz",
   },
   computed: {

   },
   watch: {

   },
   methods: {
      change(){
         this.title2 += '!!!!!!'
      }
   }
});