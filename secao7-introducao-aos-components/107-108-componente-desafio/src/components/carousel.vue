<template>
   <v-carousel>
        <v-carousel-item
            v-for="(item,i) in fotos"
            :key="i"
            :src="item.src"></v-carousel-item>
      </v-carousel>
</template>

<script>
export default {
     data() {
    return {
      fotos: [
        {src: 'https://www.euastronauta.com.br/wp-content/uploads/2020/12/be.jpg'},
        {src: 'https://portalpopline.com.br/wp-content/uploads/2020/11/bts-be-jin-2.jpg'},
        {src: 'https://portalpopline.com.br/wp-content/uploads/2020/11/bts-be-suga-2.jpg'},
        {src: 'https://portalpopline.com.br/wp-content/uploads/2020/11/jhope.jpg'},
        {src: 'https://portalpopline.com.br/wp-content/uploads/2020/11/rm-be.jpg'},
        {src: 'https://portalpopline.com.br/wp-content/uploads/2020/11/jimin-bts-be.jpg'},
        {src: 'https://lh3.googleusercontent.com/cXdzmSu17YG3r910FSdJlQ3nhgWpJeVDryiln8zFbjecgJ4U15Ldc9skkkLGBQ1LbJX7sOEr8l0FgUaczJl6yml7'},
        {src: 'https://portalpopline.com.br/wp-content/uploads/2020/11/bts-be-jungkook-2.jpg'}
      ]
    }
  }
}
</script>

<style>

</style>