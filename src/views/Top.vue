<template>
  <v-main>
    <SearchForm />
    <TodoList />
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchForm from "./../components/SearchForm.vue";
import TodoList from "./../components/TodoList.vue";

/**
 * トップ画面
 */
@Component({
  components: {
    SearchForm,
    TodoList,
  },
})
export default class Top extends Vue {}
</script>

<style scoped></style>
