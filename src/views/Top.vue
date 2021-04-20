<template>
  <v-main>
    <SearchForm />
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchForm from "./../components/SearchForm.vue";

/**
 * トップ画面
 */
@Component({
  components: {
    SearchForm,
  },
})
export default class Top extends Vue {}
</script>

<style scoped></style>
