<template>
  <div id="app">
    <h2>Filtros & Mixins</h2>
    <hr />
	<p>{{loggedUser}}</p>
    <p>{{ cpfStudent }} sem o filtro</p>
    <p>{{ cpfStudent | cpf }} com o filtro cpf</p>
    <p>{{ cpfStudent | cpf | reverse }} com o filtro reverse</p>
    <p>{{ "frontend" | reverse }} com o filtro reverse</p>
    <hr />
    <input type="text" :value="cpfStudent | cpf" />
    <hr />
    <Fruits />
    <hr />
    <div>
      <ul>
        <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
      </ul>
      <input type="text" v-model="fruit" @keydown.enter="add" />
    </div>
  </div>
</template>

<script>
import Fruits from "./Fruits.vue";
import fruitsMixin from "./fruitsMixin.js";
import userMixin from "./userMixin.js";

export default {
  components: { Fruits },
  mixins: [fruitsMixin, userMixin],
  filters: {
    cpf(valor) {
      const arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    },
  },
  data() {
    return {
      cpfStudent: "60070080090",
	  fruits: ['avocado', 'grape']
    };
  }
};
</script>

<style>
body {
  background-color: #021324;
  color: #fff;
}
h2 {
  color: #0a528d;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  font-size: 2.5rem;
}

input {
  font-size: 2.5rem;
}
</style>
