<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <span class="mr-2">Smart City</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn text>
        <span class="mr-2">Fishery Prediction</span>
        <v-icon>mdi-crosshairs-gps</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- <v-spacer /> -->
    <v-content id="content-box">
      <DisplayData />
    </v-content>
  </v-app>
</template>

<script>
import DisplayData from "./components/DisplayData.vue";

export default {
  name: "App",

  components: {
    DisplayData
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>

#content-box {
  display: "flex";
  justify-content: center;
  align-items: center;
  padding-top: 0;
}

</style>