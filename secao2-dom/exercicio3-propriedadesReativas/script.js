new Vue({
   el: "#app",
   data: {
      value: 0,
   },
   computed: {
      result() {
         return this.value === 37 ? "Same value" : "Diferent value";
      }
   },
   watch: {
      result(newValue, oldValue) {
         setTimeout(() => {
            this.value = 0
         }, 3000)
      }
   },
   methods: {
   }
});