<template>
  <v-app>
    <Header />
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";

/**
 * App
 */
@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style>
a {
  text-decoration: none;
}
</style>
