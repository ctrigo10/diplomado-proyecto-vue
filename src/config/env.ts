function getEnvVariable(key: string): string {
  const value = import.meta.env[key]

  if (value === undefined || value === null || value === '') {
    throw new Error(
      `Error de configuración: la variable de entorno ${key} es obligatorio y no está definido`,
    )
  }

  return value
}

export const ENV = {
  API_URL: getEnvVariable('VITE_API_URL'),
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Mi proyecto Vue',
  ENV: import.meta.env.VITE_APP_ENV || 'development',
} as const
