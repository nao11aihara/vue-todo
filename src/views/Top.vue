<template>
  <v-main>
    <TodoSearchForm />
    <TodoList :todos="todos" />
  </v-main>
</template>

<script lang="ts">
import { Todo } from "@/types/Todo";
import { Component, Vue } from "vue-property-decorator";
import TodoSearchForm from "../components/TodoSearchForm.vue";
import TodoList from "./../components/TodoList.vue";

/**
 * トップ画面
 */
@Component({
  components: {
    TodoSearchForm,
    TodoList,
  },
})
export default class Top extends Vue {
  // ---computed---
  /**
   * TODO複数件
   * @returns TODO複数件
   */
  public get todos(): Todo[] {
    const todo: Todo[] = this.$store.getters.getAllTodos;

    // クエリストリングがない場合、全件返す
    if (!this.$route.query.title) {
      return todo;
    }

    // クエリストリングがある場合、タイトルに部分一致したもののみ返す
    return todo.filter(
      (todo) => todo.title.indexOf(String(this.$route.query.title)) != -1
    );
  }

  // ---ライフサイクル---
  /**
   * created
   */
  public created(): void {
    console.warn(this.todos);
  }
}
</script>

<style scoped></style>
