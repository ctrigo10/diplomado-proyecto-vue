<script setup lang="ts">
import { RouterView } from 'vue-router'
import GlobalSnackbar from './components/global/GlobalSnackbar.vue';
</script>

<template>
  <RouterView />
  <GlobalSnackbar />
</template>

<style scoped></style>
