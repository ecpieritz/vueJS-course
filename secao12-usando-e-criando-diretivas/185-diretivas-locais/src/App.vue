<template>
  <div id="app">
    <h1>Diretivas</h1>
    <p v-text="'Usando diretiva v-text'"></p>
    <p v-html="'Usando diretiva <strong>v-html</strong>'" />
    <hr />
    <p v-spotlight:background.delay="'magenta'">
      Usando diretiva personalizada
    </p>
    <p v-spotlight.delay="color">Usando diretiva personalizada</p>
    <p v-localSpotlight.delay="'red'">Usando diretiva personalizada localmente</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "yellow",
    };
  },
  directives: {
    localSpotlight: {
      bind(el, binding, vnode) {
        //não precisa manter o binding e o vnode como parâmetros se não for usar
        //el.style.backgroundColor = "magenta"

        let delay = 0;
        if (binding.modifiers["delay"]) delay = 5000;

        setTimeout(() => {
          if (binding.arg === "background") {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }, delay);
      },
    },
  },
};
</script>

<style>
body {
  background-color: #000;
  color: #fff;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  margin-left: 30px;
}

#app h1 {
  color: #09708f;
  font-size: 3.5rem;
  text-align: center;
  margin-left: none;
}
</style>
