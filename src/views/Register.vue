<template>
  <v-main>
    <TodoRegisterForm />
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoRegisterForm from "../components/TodoRegisterForm.vue";

/**
 * TODO登録画面
 */
@Component({
  components: {
    TodoRegisterForm,
  },
})
export default class Register extends Vue {}
</script>

<style scoped></style>
