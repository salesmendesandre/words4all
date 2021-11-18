<template>
  <v-container>
    <v-row cols="12">
      <v-col   cols="12" md="6"   >
        <img src="/portada.svg" width="60%" style="margin-left: 15%">
      </v-col>

      <v-col cols="12" md="6">
        <div class="text-portada">
          <b><span style="color:#1170b7">WORDS<span style="color:#D35B31">4</span>ALL</span></b> is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.

          <div style="margin-top: 50px">
            <v-btn block color="primary" rounded large @click="$router.push({name:'Categories'})"> Empezar a aprender</v-btn>
          </div>

        </div>
      </v-col>

    </v-row>

    <v-row>
      <v-col cols="12"  style="margin-top: 100px">
        <img src="/logos.png" width="60%" style="margin-left: 20%;">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
}
</script>

<style>
.text-portada {
  font-size: 1.2em;
  text-align: justify;
}

</style>
