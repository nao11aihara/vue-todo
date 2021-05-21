<template>
  <v-main>
    <TodoSearchForm />
    <TodoList />
  </v-main>
</template>

<script lang="ts">
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
export default class Top extends Vue {}
</script>

<style scoped></style>
