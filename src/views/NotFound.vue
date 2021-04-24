<template>
  <v-card>
    <v-card-title>404 Not found</v-card-title>
    <v-card-subtitle>お探しのページは見つかりません。</v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
/**
 * 404ページ
 */
@Component
export default class Notfound extends Vue {}
</script>

<style scoped>
.v-card {
  margin-top: 60px;
}
</style>
