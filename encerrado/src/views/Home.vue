<template>
  <div class="home">
    <v-container fluid grid-list-md text-center>
      <v-layout wrap>
        <v-flex xs12 sm6 md4 lg3>
          <v-card>
            <v-img
              :src="vampiro"
              lazy-src="https://picsum.photos/id/11/10/6"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="100%"
              max-height="100%"
            ></v-img>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <v-card>
            <v-img
              :src="crossfit"
              lazy-src="https://picsum.photos/id/11/10/6"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="100%"
              max-height="100%"
            ></v-img>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <v-card>
            <v-img
              :src="terry"
              lazy-src="https://picsum.photos/id/11/10/6"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="100%"
              max-height="100%"
            ></v-img>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <v-card>
            <v-img
              :src="ossos"
              lazy-src="https://picsum.photos/id/11/10/6"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="100%"
              max-height="100%"
            ></v-img>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <v-card>
            <v-img
              :src="abigail"
              lazy-src="https://picsum.photos/id/11/10/6"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="100%"
              max-height="100%"
            ></v-img>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <v-card>
            <v-img
              :src="bipolar"
              lazy-src="https://picsum.photos/id/11/10/6"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="100%"
              max-height="100%"
            ></v-img>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <v-card>
            <v-img
              :src="pegada"
              lazy-src="https://picsum.photos/id/11/10/6"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="100%"
              max-height="100%"
            ></v-img>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <v-card>
            <v-img
              :src="ventriculo"
              lazy-src="https://picsum.photos/id/11/10/6"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="100%"
              max-height="100%"
            ></v-img>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <v-card>
            <v-img
              :src="possessao"
              lazy-src="https://picsum.photos/id/11/10/6"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="100%"
              max-height="100%"
            ></v-img>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <v-card>
            <v-img
              :src="pescoco"
              lazy-src="https://picsum.photos/id/11/10/6"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="100%"
              max-height="100%"
            ></v-img>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <v-card>
            <v-img
              :src="aglomerado"
              lazy-src="https://picsum.photos/id/11/10/6"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="100%"
              max-height="100%"
            ></v-img>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <v-card>
            <v-img
              :src="botos"
              lazy-src="https://picsum.photos/id/11/10/6"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="100%"
              max-height="100%"
            ></v-img>
          </v-card>
        </v-flex>
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

export default {
  name: "home",
  data() {
    return {
      vampiro: Vampiro,
      crossfit: Crossfit,
      terry: Terry,
      ossos: Ossos,
      abigail: Abigail,
      bipolar: Bipolar,
      pegada: Pegada,
      ventriculo: Ventriculo,
      possessao: Possessao,
      pescoco: Pescoco,
      aglomerado: Aglomerado,
      botos: Botos,
    };
  }
};
</script>

<style scoped>
.home {
  height: 100vh;
}
</style>