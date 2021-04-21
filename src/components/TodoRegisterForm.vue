<template>
  <v-card>
    <v-text-field outlined dense label="タイトル"></v-text-field>
    <v-btn>登録</v-btn>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

/**
 * TODO登録フォーム
 */
@Component
export default class TodoRegisterForm extends Vue {}
</script>

<style scoped>
.v-card {
  margin: 40px 80px;
  padding: 30px 80px;
  text-align: center;
}
</style>
