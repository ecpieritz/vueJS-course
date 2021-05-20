import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    produtos: [],
    quantidade: 0,
    preco: 0
  },
  getters: {
    valorTotal(state){
      return state.produtos.map(p => p.quantidade * p.preco).reduce((total, atual) => total + atual, 0)
    }
  },
  mutations: {
    adicionarProduto(state, payload){
      state.produtos.push(payload)
    },
    setQuantidade(state, payload){
      state.quantidade = payload
    },
    setPreco(state, payload){
      state.preco = payload
    },
  },
  actions:{
    //forma 1
    // adicionarProduto(context, payload){
    //   setTimeout(()=>{
    //     context.commit('adicionarProduto', payload)
    //   }, 1000)
    // },

    //forma 2
    adicionarProduto({commit}, payload){
      setTimeout(()=>{
        commit('adicionarProduto', payload)
      }, 1000)
    }
  }
})