<template>
  <v-card>
    <v-img
      :src="imagem"
      lazy-src="https://picsum.photos/id/11/10/6"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="100%"
      max-height="100%"
    ></v-img>
  </v-card>
</template>

<script>
export default {
  name: 'Imagem',
  props: {
    imagem: {
      type: String,
      default: '',
    },
  },
};
</script>