new Vue({
   el: "#challenge",
   data: {
      inputValue1: "",
      inputValue2: "",
   },
   methods: {
      showAlert(ev) {
         alert("Just a simple alert!");
      },
      changeValue(ev) {
         this.inputValue2 = ev.target.value;
      }
   }
});