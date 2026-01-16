<script setup lang="ts">
import { useAlert } from '@/composables/useAlert'
import { useRequest } from '@/composables/useRequest'
import type { Register } from '@/interfaces/auth.interface'
import router from '@/router'
import { AutheService } from '@/services/auth.service'
import { rules } from '@/tools/rules'
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { VForm } from 'vuetify/components'

const { open } = useAlert()
const { run, error, loading } = useRequest()

const register = reactive<Register>({
  username: '',
  password: '',
  confirmPassword: '',
})

const form = ref<VForm | null>(null)

const submit = async () => {
  await form.value?.validate()
  if (!form.value?.isValid) return

  try {
    await run(() =>
      AutheService.register({
        username: register.username,
        password: register.password,
      }),
    )
    open('Usuario registrado', 'success')
    router.push({ name: 'login' })
  } catch {
    console.log('error')
    open(error.value ?? 'Error al registrar', 'error')
  }
  console.log('Register', register)
}
</script>

<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card elevation="8">
          <v-card-title class="text-center">
            <v-icon size="36">mdi-account-circle</v-icon>
            <div class="mt-2">Crear cuenta</div>
          </v-card-title>

          <v-form ref="form" lazy-validation @submit.prevent="submit">
            <v-card-text>
              <v-text-field
                v-model="register.username"
                label="Usuario"
                type="text"
                required
                prepend-inner-icon="mdi-account"
                :rules="[rules.required, rules.minLength]"
              />
              <v-text-field
                v-model="register.password"
                label="Contraseña"
                type="password"
                required
                prepend-inner-icon="mdi-lock"
                :rules="[rules.required, rules.minLength]"
              />
              <v-text-field
                v-model="register.confirmPassword"
                label="Confirmar Contraseña"
                type="password"
                required
                prepend-inner-icon="mdi-lock-check"
                :rules="[
                  rules.required,
                  rules.matchPassword(register.password, register.confirmPassword),
                ]"
              />
            </v-card-text>

            <v-card-actions>
              <v-btn type="submit" block color="primary" :loading="loading"> Registrar </v-btn>
            </v-card-actions>
          </v-form>

          <v-card-actions class="justify-center pb-4">
            <span class="text-caption">
              ¿Ya tienes cuenta?
              <RouterLink :to="{ name: 'login' }" class="text-decoration-none">
                Iniciar sesión
              </RouterLink>
            </span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
