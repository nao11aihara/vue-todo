<template>
  <v-card>
    <v-app-bar app color="teal lighten-3">
      <v-app-bar-nav-icon @click="sideMenu = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        TODOリスト（Vue.js）
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="sideMenu" fixed>
      <v-list>
        <v-list-item-group>
          <router-link to="/">
            <v-list-item @click="sideMenu = false">
              トップ
            </v-list-item>
          </router-link>
          <router-link to="/register">
            <v-list-item @click="sideMenu = false">
              TODO登録
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

/**
 * ヘッダー
 */
@Component
export default class Header extends Vue {
  /**
   * data
   */
  // サイドメニュー表示
  public sideMenu = false;
}
</script>

<style scoped></style>
