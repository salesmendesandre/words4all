<template>
  <v-container>
    <v-row cols="12">
      <v-col cols="12" md="6">
        <img src="/portada.svg" width="60%" style="margin-left: 15%">
      </v-col>

      <v-col cols="12" md="6">
        <div class="text-portada">
          Las palabras son los cimientos de la educación, que es el motor de las oportunidades y la vía para conseguir
          la igualdad social. El desarrollo de tecnologías que permitan la gamificación y dinamización permite unir la
          cultura digital y la educación.
          <br>
          <br>
          En este desafío educativo llamado <b><span style="color:#1170b7">WORDS<span style="color:#D35B31">4</span>ALL</span></b> se presentan niveles y temáticas variadas. Que guiarán al usuario en una experiencia
          virtual educativa interactiva que reforzara desde la cultura general a conocimientos de materias más
          específicas. Tendrás que responder las 25 letras correctamente para llegar al objetivo.

          <div style="margin-top: 50px">
            <v-btn block color="primary" rounded large @click="$router.push({name:'Categories'})"> Empezar a aprender
            </v-btn>
          </div>
          <div style="margin-top: 10px">
            <v-btn block color="primary" rounded large @click="$router.push({name:'Team'})"> Equipo</v-btn>
          </div>

        </div>
      </v-col>

    </v-row>

    <v-row>
      <v-col cols="12" style="margin-top: 100px">
        <img src="/logos.png" width="60%" style="margin-left: 20%;">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {}
</script>

<style>
.text-portada {
  font-size: 1.2em;
  text-align: justify;
}

</style>
