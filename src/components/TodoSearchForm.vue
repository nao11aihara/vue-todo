<template>
  <v-card class="d-flex">
    <v-text-field
      outlined
      dense
      label="検索"
      v-model="inputSearchWord"
    ></v-text-field>
    <v-btn icon large @click="searchTodo()">
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
export default class TodoSearchForm extends Vue {
  // ---data---
  /**
   * 検索ワード入力値
   */
  public inputSearchWord = "";

  // ---ライフサイクル---
  /**
   * created
   */
  public created(): void {
    // クエリストリングがない場合、早期リターン
    if (!this.$route.query.title) {
      return;
    }

    // クエリストリングを検索ワード入力値に格納
    this.inputSearchWord = String(this.$route.query.title);
  }

  // ---メソッド---
  /**
   * TODOを検索する
   */
  public searchTodo(): void {
    // 現在のクエリと検索ワード入力値が同じ場合、何も行わない
    if (this.$route.query.title == this.inputSearchWord) {
      return;
    }

    // クエリストリング有のトップ画面に遷移
    this.$router.push(`/?title=${this.inputSearchWord}`);
  }
}
</script>

<style scoped>
.v-card {
  margin: 40px 80px;
  padding: 30px 60px 0;
}
</style>
