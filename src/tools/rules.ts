export const rules = {
  required: (v: string) => (!!v && v.trim() !== '') || 'Este campos es requerido',
  minLength: (v: string) => v.length >= 3 || 'Mínimo 3 caracteres',
  matchPassword: (password: string, confirmPassword: string) =>
    password === confirmPassword || 'Las contraseñas no coinciden',
}
