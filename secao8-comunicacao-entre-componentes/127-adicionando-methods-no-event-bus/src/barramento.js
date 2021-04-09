import Vue from 'vue'

export default new Vue({
    methods: {
        changeAge(idade){
            this.$emit('ageChanged', idade)
        },
        whenAgeChanges(callback){
            this.$on('ageChanged', callback)
        }
    },
})