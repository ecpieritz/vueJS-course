new Vue({
   el: "#app",
   data: {
      applyBlue: false,
      applyRose: false,
      applyGreen: false,
      classCSS: "green",
      applyTurn: true,
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