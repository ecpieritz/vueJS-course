new Vue({
   el: "#app",
   data: {
      counter: 0,
      counter2: 0,
      x: 0,
      y: 0,
   },
   methods: {
      sum() {
         this.counter++;
      },
      sum2(step, event) {
         console.log(step, event);
         this.counter2 += step;
      },
      XandY(event) {
         this.x = event.clientX;
         this.y = event.clientY;
      },
      stopHere(event) {
         event.stopPropagation();
      },
      stopNav(ev) {
         ev.preventDefault();
         /*
         essa função funcionaria da mesma forma que o .prevent
         pois está chamando o preventDefault para o evento
         */
      },
      showAlert(ev) {
         alert("Just a simple alert!");
      },
   }
});