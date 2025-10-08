<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <router-link to="/">
     <v-list-item link title="Campeonatos" subtitle="Gestão"></v-list-item> 
      </router-link >
     
  <v-divider></v-divider>
  <v-list-item link>
       <router-link to="/jogador">Jogador</router-link>
    </v-list-item>
  <v-list-item link>Time</v-list-item>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Campeonatos</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const drawer = ref(true)
</script>