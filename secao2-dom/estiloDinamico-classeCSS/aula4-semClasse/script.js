new Vue({
   el: "#app",
   data: {
      color: 'pink',
      rotate: 'rotate(45deg)',
      size: 20,
   },
   computed: {
      myStyle() {
         return {
            background: this.color,
            transform: this.rotate,
            width: `${this.size}vw`,
            height: this.size + "vw"
         }
      }
   },
   watch: {

   },
   methods: {

   }
});