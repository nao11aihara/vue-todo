<template>
  <v-card>
    <v-text-field
      outlined
      dense
      label="タイトル"
      v-model="inputTitle"
      :error="isErrorTitle"
      :error-messages="errorMessage"
    ></v-text-field>
    <v-btn :disabled="isDisabled" @click="registerTodo()">登録</v-btn>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

/**
 * TODO登録フォーム
 */
@Component
export default class TodoRegisterForm extends Vue {
  // ---data---
  /**
   * タイトル入力値
   */
  public inputTitle = "";

  /**
   * エラーメッセージ
   */
  public errorMessage = "";

  // ---computed---
  /**
   * タイトルのエラー判定
   * @returns エラー判定
   */
  public get isErrorTitle(): boolean {
    // タイトル30文字以上はバリデーションエラー
    if (this.inputTitle.length > 30) {
      this.errorMessage = "タイトルは30文字以内で入力してください。";
      return true;
    }
    this.errorMessage = "";
    return false;
  }

  /**
   * ボタンが非活性状態か
   * @returns 非活性状態判定
   */
  public get isDisabled(): boolean {
    // タイトル入力値が未入力、またはエラー判定がある場合はボタンを非活性状態にする
    if (!this.inputTitle || this.isErrorTitle) {
      return true;
    }
    return false;
  }

  // ---メソッド---
  /**
   * TODOを登録する
   */
  public registerTodo(): void {
    this.$store.dispatch("registerTodo", {
      title: this.inputTitle,
    });
    this.$router.push("/");
  }
}
</script>

<style scoped>
.v-card {
  margin: 40px 80px;
  padding: 30px 80px;
  text-align: center;
}
</style>
