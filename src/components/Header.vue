<template>
  <div>
    <img alt="Vue logo" src="./../assets/logo.png">
    <h1>{{ title }}</h1>
    <div>
      <router-link to="/">トップ画面</router-link>
    </div>
    <div>
      <router-link to="/register">登録画面</router-link>
    </div>
    <div>
      <router-link to="/edit/1">id:1の編集画面</router-link>
    </div>
    <div>
      <router-link to="/edit/2">id:2の編集画面</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Header extends Vue {
  @Prop()
  private title: string | undefined;
}
</script>

<style scoped>
</style>
