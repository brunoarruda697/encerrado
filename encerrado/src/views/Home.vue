<template>
  <div class="home">
    <v-container fluid grid-list-md text-center fill-height>
      <v-layout column>
        <v-layout row wrap>
          <div class="alinhamento"></div>
          <v-flex xs2 sm1 md1 lg1 v-for="image in imagens1" :key="image">
            <imagem :imagem="image" />
          </v-flex>
        </v-layout>
        <v-layout fill-height>
          <texto />
        </v-layout>
        <v-layout row wrap>
          <div class="alinhamento"></div>
          <v-flex xs2 sm1 md1 lg1 v-for="image in imagens2" :key="image">
            <imagem :imagem="image" />
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Vampiro from "@/assets/vampiro.jpg";
import Crossfit from "@/assets/crossfit.jpg";
import Terry from "@/assets/terry.png";
import Ossos from "@/assets/ossos.jpg";
import Abigail from "@/assets/abigail.jpg";
import Bipolar from "@/assets/bipolar.png";
import Pegada from "@/assets/pegada.jpg";
import Ventriculo from "@/assets/ventriculo.jpg";
import Possessao from "@/assets/possessao.png";
import Pescoco from "@/assets/pescoco.jpg";
import Aglomerado from "@/assets/aglomerado.jpg";
import Botos from "@/assets/botos.jpg";
import Imagem from "@/components/Imagem.vue";
import Texto from "@/components/Texto.vue";

export default {
  name: "home",
  components: {
    Imagem,
    Texto
  },
  data() {
    return {
      imagens1: {
        vampiro: Vampiro,
        crossfit: Crossfit,
        terry: Terry,
        ossos: Ossos,
        abigail: Abigail,
        bipolar: Bipolar
      },
      imagens2: {
        pegada: Pegada,
        ventriculo: Ventriculo,
        possessao: Possessao,
        pescoco: Pescoco,
        aglomerado: Aglomerado,
        botos: Botos
      }
    };
  }
};
</script>

<style scoped>
.home {
  height: 100vh;
}

@media screen and (min-width: 768px) {
  .alinhamento {
    margin-left: 25%;
  }
}
</style>