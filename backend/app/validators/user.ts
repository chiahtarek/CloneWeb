// validators/user.ts

import vine from '@vinejs/vine'
import db from '@adonisjs/lucid/services/db'

/**
 * REGISTER VALIDATOR
 */
export const registerValidator = vine.compile(
  vine.object({
    fullName: vine
      .string()
      .trim()
      .minLength(2)
      .maxLength(100)
      .optional(),

    email: vine
      .string()
      .trim()
      .email()
      .normalizeEmail()
      .unique(async (value) => {
        const user = await db.from('users').where('email', value).first()

        return !user
      }),

    password: vine.string().minLength(8).maxLength(32),

    roleId: vine.number().exists(async (value) => {
      const role = await db.from('roles').where('id', value).first()

      return !!role
    }),

    endereco: vine
      .object({
        rua: vine.string().trim().optional(),

        numero: vine.number().optional(),

        cidade: vine.string().trim().optional(),

        estado: vine.string().trim().optional(),
      })
      .optional(),
  })
)

/**
 * LOGIN VALIDATOR
 */
export const loginValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()
      .normalizeEmail(),

    password: vine
      .string()
      .minLength(8)
      .maxLength(32),
  })
)