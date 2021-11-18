<template>
  <v-app>
    <v-app-bar
        app
        color="white"
        height="80"
    >
      <div class="d-flex align-center">
        <a @click="$router.push({name:'Home'})">
          <v-img
              alt="Vuetify Name"
              class="shrink mt-1"
              contain
              min-width="80"
              src="Words4All.png"
              width="300"
              style="z-index: 99999"
          />
        </a>
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <a href="https://hack4edu.org/">
        <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="/hack4edu.png"
            width="300"
            href="hack4edu.com"
        />
        </a>
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
