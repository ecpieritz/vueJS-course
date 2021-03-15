const vm = new Vue({
   el: "#app",
   data: {
      title: "Colocando $refs e usando em template",
      lesson: 'Aula: usando Refs',
      module: 'Módulo: Instância Vue'
   },
   computed: {

   },
   watch: {

   },
   methods: {
      change(){
         this.title += '!!';
      },
      changeLesson(){
         this.lesson += '.';
      },
      changeModule(){
         this.module += '?';
      }
   }
});

vm.$refs.lessonRef.innerText = "Alterado diretamente!"