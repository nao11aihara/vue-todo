<template>
  <v-main>
    <TodoEditForm />
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoEditForm from "./../components/TodoEditForm.vue";

/**
 * TODO編集画面
 */
@Component({
  components: {
    TodoEditForm,
  },
})
export default class Edit extends Vue {}
</script>

<style scoped></style>
