<template>
  <div>
    <img alt="Vue logo" src="./../assets/logo.png">
    <h1>{{ title }}</h1>
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop()
  private title: string | undefined;
}
</script>

<style scoped>
</style>
