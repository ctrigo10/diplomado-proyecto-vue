<script setup lang="ts">
const goHome = () => {
  console.log('ir a casa')
}
</script>

<template>
  <v-container class="text-center">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-icon size="96" color="error">mdi-alert-circle-outline</v-icon>
        <h1 class="text-h4 mt-4">404</h1>
        <p class="text-subtitle-1">La página que buscas no existe</p>

        <v-btn class="mt-4" color="primary" @click="goHome"> Volver </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
