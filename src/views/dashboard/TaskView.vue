<script setup lang="ts">
import { ref } from 'vue'

const search = ref()
const newTask = () => {}
</script>
<template>
  <v-card flat>
    <template #title>
      <div class="d-flex align-center justify-space-between w-100">
        <span class="text-h6">Gestión de tareas</span>
        <v-btn color="primary" @click="newTask">
          <v-icon icon="mdi-plus" />
          Agregar Tarea
        </v-btn>
      </div>
    </template>

    <v-card-text>
      <v-text-field
        v-model="search"
        label="Buscar por tarea..."
        prepend-inner-icon="mdi-magnify"
        dense
        variant="outlined"
        clearable
      />
    </v-card-text>
  </v-card>
</template>
