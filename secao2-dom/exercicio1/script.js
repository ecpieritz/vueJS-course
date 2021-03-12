new Vue({
   el: "#app",
   data: {
      titleh1: "Using Vue.js",
      link: "https://github.com/EPieritz",
      linkHtml: '<a href="https://google.com.br"> Google </a>'
   },
   methods: {
      saudation() {
         return 'Hi! Have a good week!'
      },
      title() {
         this.titleh1 = "Bye!"
         return this.titleh1
      }
   }
});