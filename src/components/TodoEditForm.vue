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
    <v-btn :disabled="isDisabled" @click="updateTodo()">更新</v-btn>
  </v-card>
</template>

<script lang="ts">
import { Todo } from "@/types/Todo";
import { Component, Vue } from "vue-property-decorator";

/**
 * TODO編集フォーム
 */
@Component
export default class TodoEditForm extends Vue {
  // ---data---
  /**
   * タイトル入力値
   */
  public inputTitle = "";

  /**
   * エラーメッセージ
   */
  public errorMessage = "";

  /**
   * バリデーション済みのパスパラメータID
   */
  public validTodoId: number | undefined = undefined;

  /**
   * TODO1件
   */
  public todo: Todo | undefined = undefined;

  // ---computed---
  /**
   *  タイトルのエラー判定
   *  @returns エラー判定
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

  // ---ライフサイクル---
  public created() {
    // 正規表現:0以上の整数のみ
    //
    // ^: 行の先頭にマッチ
    // \d: 数字にマッチ
    // *: 直前の文字の０回以上の繰り返しにマッチ
    // $: 行の末尾にマッチ
    const regexp = /^\d*$/;

    // パスパラメータのIDが0以上の整数の場合のみnumber型に変更、違う場合はundefined
    this.validTodoId = regexp.test(this.$route.params.id)
      ? Number(this.$route.params.id)
      : undefined;

    // 上記でundefinedが入った場合はエラーページに遷移
    if (!this.validTodoId) {
      this.$router.push("/error");
      return;
    }

    // storeからTODO1件を取得
    this.todo = this.$store.getters.getTodoById(this.validTodoId);

    // 上記でundefinedが入った場合はエラーページに遷移
    if (!this.todo) {
      this.$router.push("/error");
      return;
    }

    // タイトル入力値にstoreから取得したTODOのタイトルを入れる
    this.inputTitle = this.todo!.title;
  }

  // ---メソッド---
  /**
   * TODOを更新する
   */
  public updateTodo(): void {
    this.$store.dispatch("updateTodo", {
      id: this.validTodoId!,
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
