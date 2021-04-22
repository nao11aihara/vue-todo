<template>
  <v-card class="d-flex">
    <v-text-field outlined dense label="検索"></v-text-field>
    <v-btn icon large>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

/**
 * TODO検索フォーム
 */
@Component
export default class TodoSearchForm extends Vue {}
</script>

<style scoped>
.v-card {
  margin: 40px 80px;
  padding: 30px 60px 0;
}
</style>
