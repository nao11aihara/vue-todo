<template>
  <v-card>
    <v-card-subtitle>「xxxx」の検索結果：xx件</v-card-subtitle>
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
        <tr v-for="todo in allTodos" :key="todo.title">
          <td>{{ todo.title }}</td>
          <td>
            <v-checkbox v-model="todo.isDone"></v-checkbox>
          </td>
          <td>
            <v-btn icon @click="toEdit(todo.id)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </td>
          <td>
            <v-btn icon>
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
   * TODO全件
   * @returns TODO全件
   */
  public get allTodos(): Todo[] {
    return this.$store.getters.getAllTodos;
  }

  // ---ライフサイクル---
  public created() {
    console.warn(this.allTodos);
  }

  // ---メソッド---
  /**
   * 編集画面に遷移する
   * @param id ID
   */
  public toEdit(id: number): void {
    this.$router.push(`/edit/${id}`);
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
