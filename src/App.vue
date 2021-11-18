<template>
  <v-app>
    <v-app-bar
        app
        color="white"
        height="80"
    >
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Name"
            class="shrink mt-1"
            contain
            min-width="80"
            src="Words4All.png"
            width="300"
            style="z-index: 99999"
        />
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="/hack4edu.png"
            width="300"
        />
      </div>
    </v-app-bar>
    <div class="secondBar">

    </div>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
.secondBar{
  width: 100vw;
  height: 15px;
  background-color: #D35B31;
  margin-top: 80px;
}
</style>
