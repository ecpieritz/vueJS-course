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
    <hr />
    <p
      v-local-spotlight:background.delay.toggle="{
        color1: 'green',
        color2: 'blue',
        delay: 2000,
        interval: 500,
      }"
    >
      Usando diretiva personalizada localmente
    </p>
    <p v-local-spotlight.delay="{ color1: 'red', delay: 5000 }">
      Usando diretiva personalizada localmente
    </p>
  </div>
</template>

<script>
export default {
  components: {},
  directives: {
    "local-spotlight": {
      bind(el, binding, vnode) {
        const applyColor = color => {
          if (binding.arg === "background") {
            el.style.backgroundColor = color
          } else {
            el.style.color = color
          }
        }

        let delay = 0
        if (binding.modifiers['delay']) delay = binding.value.delay

        const color1 = binding.value.color1
        const color2 = binding.value.color2
        let currentColor = color1

        setTimeout(() => {
          if (binding.modifiers["toggle"]) {
            setInterval(() => {
              currentColor = currentColor === color1 ? color2 : color1
              applyColor(currentColor);
            }, binding.value.interval);
          } else {
            applyColor(binding.value.color1)
          }
        }, delay);
      },
    },
  },
  data() {
    return {
      color: "yellow",
    };
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
