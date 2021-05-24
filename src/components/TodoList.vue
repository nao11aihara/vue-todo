<template>
  <v-card>
    <!-- 検索ワード有の場合、検索ワードと検索ヒット件数を表示 -->
    <v-card-subtitle v-if="$route.query.title">{{
      `「${$route.query.title}」の検索結果 × ステータス「${selectedStatus}」：${todos.length}件`
    }}</v-card-subtitle>
    <!-- 検索ワード無の場合、全件の件数を表示 -->
    <v-card-subtitle v-else>{{
      `全件 × ステータス「${selectedStatus}」：${todos.length}件`
    }}</v-card-subtitle>
    <v-radio-group v-model="selectedStatus" row>
      <v-radio
        v-for="status in statusList"
        :key="status"
        :label="status"
        :value="status"
      ></v-radio>
    </v-radio-group>
    <v-simple-table>
      <thead>
        <tr>
          <th>タイトル</th>
          <th>完了</th>
          <th>編集</th>
          <th>削除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.title }}</td>
          <td>
            <v-checkbox
              :input-value="todo.isDone"
              @change="changeIsDone(todo.id)"
            ></v-checkbox>
          </td>
          <td>
            <v-btn icon @click="toEdit(todo.id)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </td>
          <td>
            <v-btn icon @click="daleteTodo(todo.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Todo } from "./../types/Todo";

/**
 * TODO一覧
 */
@Component
export default class TodoList extends Vue {
  // ---data---
  /**
   * ステータス一覧
   */
  public statusList = ["全て", "未完了", "完了"];

  /**
   * 選択中のステータス
   */
  public selectedStatus = "全て";

  // ---computed---
  /**
   * TODO複数件
   * @returns TODO複数件
   */
  public get todos(): Todo[] {
    const todos: Todo[] = this.$store.getters.getAllTodos;

    // クエリストリング：あり（タイトルに部分一致したもののみ返す）
    // 選択中のステータス:完了
    if (this.$route.query.title && this.selectedStatus === "完了") {
      return todos.filter(
        (todo) =>
          todo.title.indexOf(String(this.$route.query.title)) != -1 &&
          todo.isDone === true
      );
    }

    // クエリストリング：あり（タイトルに部分一致したもののみ返す）
    // 選択中のステータス:未完了
    if (this.$route.query.title && this.selectedStatus === "未完了") {
      return todos.filter(
        (todo) =>
          todo.title.indexOf(String(this.$route.query.title)) != -1 &&
          todo.isDone === false
      );
    }

    // クエリストリング：あり（タイトルに部分一致したもののみ返す）
    // 選択中のステータス:全て
    if (this.$route.query.title && this.selectedStatus === "全て") {
      return todos.filter(
        (todo) => todo.title.indexOf(String(this.$route.query.title)) != -1
      );
    }

    // クエリストリング：なし
    // 選択中のステータス:完了
    if (!this.$route.query.title && this.selectedStatus === "完了") {
      return todos.filter((todo) => todo.isDone === true);
    }

    // クエリストリング：なし
    // 選択中のステータス:未完了
    if (!this.$route.query.title && this.selectedStatus === "未完了") {
      return todos.filter((todo) => todo.isDone === false);
    }

    // クエリストリング：なし
    // 選択中のステータス:全て
    return todos;
  }

  // ---ライフサイクル---
  /**
   * created
   */
  public created(): void {
    console.log(this.todos);
  }

  // ---メソッド---
  /**
   * 作業ステータスを切り替える
   */
  public changeIsDone(id: number): void {
    this.$store.dispatch("changeIsDone", { id });
  }

  /**
   * 編集画面に遷移する
   * @param id ID
   */
  public toEdit(id: number): void {
    this.$router.push(`/edit/${id}`);
  }

  /**
   * TODOを削除する
   * @param id ID
   */
  public daleteTodo(id: number): void {
    const confirm: boolean = window.confirm("TODOを削除してよろしいですか?");

    // confirmがtrueの場合、指定IDのTODOを削除
    if (confirm) {
      this.$store.dispatch("daleteTodo", { id });
    }
  }
}
</script>

<style scoped>
.v-card {
  margin: 40px 80px;
}

.v-input--radio-group--row {
  margin-left: 16px;
}
</style>
