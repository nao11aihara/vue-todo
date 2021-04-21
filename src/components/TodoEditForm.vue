<template>
  <v-card>
    <v-text-field outlined dense label="タイトル"></v-text-field>
    <v-btn>更新</v-btn>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

/**
 * TODO編集フォーム
 */
@Component
export default class TodoEditForm extends Vue {}
</script>

<style scoped>
.v-card {
  margin: 40px 80px;
  padding: 30px 80px;
  text-align: center;
}
</style>
