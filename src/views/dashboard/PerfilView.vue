<script setup lang="ts">
import { useAuth } from '@/composables/useAuth';

const { user } = useAuth()
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card elevation="4">
          <v-card-title>
            <v-icon start>mdi-account</v-icon>
            Perfil
          </v-card-title>

          <v-divider />

          <v-card-text>
            <v-list>
              <v-list-item>
                <template #prepend>
                  <v-icon>mdi-account-circle</v-icon>
                </template>

                <v-list-item-title>Usuario</v-list-item-title>
                <v-list-item-subtitle>
                  {{ user?.username }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
