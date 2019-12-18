<template>
  <v-app>
    <!-- header -->
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          contain
          :src="logo1"
          transition="scale-transition"
          width="50"
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
    <v-img
      class="shrink mr-2"
      contain
      :src="logo2"
      transition="scale-transition"
      width="100"
      id="logo_uc"
    />
  </v-app>
</template>

<script>
import logo1 from '@/logo.png'
import logo2 from '@/logouc.png'
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
      logo1 : logo1,
      logo2 : logo2,
    //
  })
};
</script>

<style scoped>
#logo_uc {
  position: absolute;
  right : 10px;
  bottom: 40px;
}
#title {
  height: 100%;
  font-size: 40px;
  font-family: monospace;
}
#content-box {
  display: "flex";
  justify-content: center;
  align-items: center;
  padding-top: 0;
  width: 100%;
  height: 100%;
}
</style>