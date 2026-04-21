export interface PayloadUser {
  fullName?: string | undefined
  email: string
  password: string
}

export interface LoginInput {
  email: string
  password: string
}

export interface UserOutput {
  user: {
    id: number
    fullName: string | null
    email: string
    createdAt: Date | null
    updatedAt: Date | null
  }
}

export interface LoginOutput extends UserOutput {
  token: {
    type: string
    value: string
    expiresAt: Date | null
  }
}

export interface UserToken {
  name: string | null
  type: string
  abilities: string[]
  lastUsedAt: Date | null
  expiresAt: Date | null
  createdAt: Date | null
}
