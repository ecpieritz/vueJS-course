new Vue({
   el: "#challenge",
   data: {
      name: "Emilyn Pieritz",
      age: 29,
      image: "https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_2048,h_1365/https://ezdevs.com.br/wp-content/uploads/2020/07/vuee.png",
   },
   methods: {
      randomic() {
         return Math.random();
      },
   }
});