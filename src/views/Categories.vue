<template>
  <v-container>
    <h1 style="margin-top: -70px">Categorías</h1>
    <v-row>
      <v-col cols="12" md="3" v-for="category in categories" v-bind:key="category.id" >
        <v-card>
          <template slot="progress">

            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
          </template>

          <v-img
              height="250"
              :src="category.img"
          ></v-img>

          <v-card-title>{{category.title}}</v-card-title>

          <v-card-text style="min-height: 200px">
            <div style="text-align: justify">  {{category.desc}}</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="$router.push('/pasapalabra/'+category.id)"
            >
              Jugar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import categories from './categories'

export default {
  name: "Categories",
  data(){
    return {
      categories:categories
    }
  }
}
</script>

<style scoped>

</style>
