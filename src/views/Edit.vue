<template>
  <v-main>
    <p>id:{{ $route.params.id }}の編集画面</p>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

/**
 * TODO編集画面
 */
@Component({
  components: {},
})
export default class Edit extends Vue {}
</script>

<style scoped></style>
