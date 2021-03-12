const vm1 = new Vue({
   el: "#app1",
   data: {
      title1: "Multi instância em Vue",
   },
   computed: {

   },
   watch: {

   },
   methods: {
      change(){
         vm2.title2 += '????';
      }
   }
});

const vm2 = new Vue({
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
         vm1.title1 += '!!!!!!';
      }
   }

});

setTimeout(()=>{
   vm1.title1 = 'Alterado pelo timer!';
}, 4000)