<template>
  <v-app>
    <app-menu />

    <v-app-bar app>
        <app-toolbar />
    </v-app-bar>

    <v-content>
      <app-carousel />
    </v-content>

    <app-footer />
  </v-app>
</template>

<script>
import Menu from './components/menu.vue'
import Toolbar from './components/toolbar.vue'
import Carousel from './components/carousel.vue'
import Footer from './components/footer.vue'

export default {
  components:{
    'app-menu': Menu,
    'app-toolbar': Toolbar,
    'app-carousel': Carousel,
    'app-footer': Footer
  }
}
</script>
