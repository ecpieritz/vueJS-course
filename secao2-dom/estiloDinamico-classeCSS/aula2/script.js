new Vue({
   el: "#app",
   data: {
      applyBlue: false,
      applyRose: false,
      applyGreen: false,
   },
   computed: {
      style1() {
         return {
            rose: this.applyRose,
            blue: !this.applyRose,
         }
      }
   },
   watch: {

   },
   methods: {

   }
});