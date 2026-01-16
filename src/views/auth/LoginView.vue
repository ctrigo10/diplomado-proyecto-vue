<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
import type { Credentials } from '@/interfaces/auth.interface'
import { rules } from '@/tools/rules'
import { reactive, ref } from 'vue'
import { VForm } from 'vuetify/components'

const { login, loading } = useAuth()

const credentials = reactive<Credentials>({
  username: '',
  password: '',
})

const form = ref<VForm | null>(null)

const submit = async () => {
  await form.value?.validate()
  if (!form.value?.isValid) return

  await login(credentials)
}
</script>

<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card elevation="8">
          <v-card-title class="text-center">
            <v-icon size="36">mdi-account-circle</v-icon>
            <div class="mt-2">Iniciar Sesión</div>
          </v-card-title>

          <v-form ref="form" lazy-validation @submit.prevent="submit">
            <v-card-text>
              <v-text-field
                v-model="credentials.username"
                prepend-inner-icon="mdi-account"
                :rules="[rules.required, rules.minLength]"
                label="Usuario"
                type="text"
                required
              />
              <v-text-field
                v-model="credentials.password"
                prepend-inner-icon="mdi-lock"
                :rules="[rules.required, rules.minLength]"
                label="Contraseña"
                type="password"
                required
              />
            </v-card-text>

            <v-card-actions>
              <v-btn type="submit" :loading="loading" block color="primary"> Entrar </v-btn>
            </v-card-actions>
          </v-form>

          <v-card-actions class="justify-center pb-4">
            <span class="text-caption">
              ¿No tienes cuenta?
              <RouterLink :to="{ name: 'register' }" class="text-decoration-none">
                Registrate aquí
              </RouterLink>
            </span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
