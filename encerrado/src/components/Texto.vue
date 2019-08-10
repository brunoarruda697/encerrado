<template>
  <div class="mensagem">
    <div class="texto">
      <span>Inscrições Encerradas</span>
    </div>
    <div class="subtexto">
      <span>Clique no botão abaixo para saber qual sala estará</span>
    </div>
    <input type="button" class="botao" @click="irParaEscala($event)" value="Escala" />
  </div>
</template>

<script>
export default {
  name: 'Texto',
  methods: {
    irParaEscala() {
      window.open('https://google.com.br');
    },
  },
};
</script>

<style scoped>
.mensagem {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 15vh;
}

.texto {
  font-size: 8vh;
}

.subtexto {
  margin-top: 5vh;
  font-size: 4vh;
}

.botao {
  margin-top: 5vh;
  color: white;
  background-color: black;
  width: 40vh;
  height: 8vh;
  text-align: center;
  border-radius: 10px;
  font-style: normal;
  letter-spacing: 0.03em;
  font-weight: bold;
  font-size: 3vh;
  font-family: "Montserrat", sans-serif;
  outline: none;
}

.botao:active {
  margin-top: 7vh;
  color: white;
  background-color: grey;
  width: 40vh;
  height: 8vh;
  text-align: center;
  border-radius: 10px;
  font-style: normal;
  letter-spacing: 0.03em;
  font-weight: bold;
  font-size: 3vh;
  font-family: "Montserrat", sans-serif;
}
</style>