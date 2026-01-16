export interface Credentials {
  username: string
  password: string
}

export interface Register extends Credentials {
  confirmPassword: string
}

export interface User {
  username: string
}

export interface Login {
  user: User,
  token: string
}

export interface ResponseLogin {
  token: string
}
