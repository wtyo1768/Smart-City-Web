<template>
  <v-app>
    <!-- header -->
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

        <v-btn text>
          <span class="mr-2">Fishery Prediction</span>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn text>
        <span class="mr-2">ncku smart city</span>
        <v-icon>mdi-crosshairs-gps</v-icon>
      </v-btn>
      <!-- <v-progress-linear
        v-show="loading"
        color="black"
        height="5"
        id="progress-bar"
        :indeterminate="true"
      ></v-progress-linear>-->
    </v-app-bar>

    <!-- main -->
    <v-content id="content-box">
      <MainPage />
    </v-content>
  </v-app>
</template>

<script>
import MainPage from "./components/main.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["loading"])
  },
  components: {
    MainPage
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
#title {
  height: 100%;
  font-size: 40px;
  font-family: monospace;
  text-align: ;
}
#content-box {
  display: "flex";
  justify-content: center;
  align-items: center;
  padding-top: 0;
  width: 100%;
  height: 100%;
}
#progress-bar {
  position: absolute;
  width: 100vw;
  left: 0;
  bottom: -3px;
  z-index: 100;
}
</style>