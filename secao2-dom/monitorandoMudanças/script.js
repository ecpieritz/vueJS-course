new Vue({
   el: "#app",
   data: {
      counter: 0,
      counter2: 0,
   },
   computed: {
      result() {
         return this.counter > 5 ?
            "> 5" : this.counter < 5 ? "< 5" : "= 5"
      }
   },
   watch: {
      /*
      Watch - propriedade assíncrona
      
      Diferente dos outros, o watch PRECISA que seja
      utilizado o mesmo nome da propriedade que será monitorado
      */
      counter2(newValue, oldValue) {
         setTimeout(() => {
            this.counter2 = 0
         }, 2000)
      }
   },
   methods: {
      increase() {
         this.counter++;
      },
      decrease() {
         this.counter--;
      },
   }
});