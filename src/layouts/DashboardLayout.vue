<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
import router from '@/router'

const { logout } = useAuth()
</script>

<template>
  <v-app>
    <v-app-bar elevation="2">
      <v-app-bar-title>Proyecto Vue 3</v-app-bar-title>
      <v-spacer />
      <v-btn variant="text" @click="logout">
        <v-icon start>mdi-logout</v-icon>
        Salir
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer permanent>
      <v-list nav>
        <v-list-item
          title="Perfil"
          prepend-icon="mdi-account"
          @click="router.push({ name: 'profile' })"
        />
        <v-list-item
          title="Tareas"
          prepend-icon="mdi-format-list-checks"
          @click="router.push({ name: 'tasks' })"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-5" style="min-height: 95vh">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer border class="justify-center">
      <span class="text-caption">© 2025 - Proyecto Vue 3</span>
    </v-footer>
  </v-app>
</template>
