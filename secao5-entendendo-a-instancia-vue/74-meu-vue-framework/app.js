function MyVue(params){
   this.$el = document.querySelector(params.el)
   this.$data = params.data

   for(let atr in this.$data){
      Object.defineProperty(this, atr, {
         get: () =>{
            return this.$data[atr]
         },
         set: value => {
            this.$data[atr] = value
         }
      })
   }

   //interpolar
   const regex = /\{\{([\s\w)(,.+*-/]*)\}\}/g
   this.$el.innerHTML = this.$el.innerHTML.replace(regex, (match, $1) =>{
      const value = this[$1.trim()]
      return value ? value : eval($1)
   })
}

const vm = new MyVue({
   el: '#app',
   data: {
      name: 'Emilyn',
      surname: 'Pieritz'
   }
})

console.log(vm.name)
console.log(vm.surname)