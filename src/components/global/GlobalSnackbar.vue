<script setup lang="ts">
import { useAlert } from '@/composables/useAlert'

const { state, close } = useAlert()
</script>

<template>
  <v-snackbar
    :model-value="state.show"
    @update:model-value="close"
    :color="state.type"
    timeout="4000"
    location="top right"
    elevation="24"
  >
    <div>
      <v-icon start icon="mdi-information-outline"/>
      {{ state.message }}
    </div>

    <template #actions>
      <v-btn variant="text" icon="mdi-close" @click="close"></v-btn>
    </template>
  </v-snackbar>
</template>
