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
   methods: {
      increase() {
         this.counter++;
      },
      decrease() {
         this.counter--;
      },
      // result() {
      //    return this.counter > 5 ?
      //       "> 5" : this.counter < 5 ? "< 5" : "= 5"
      // }
   }
});