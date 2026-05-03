

export const registerValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().minLength(2).maxLength(100).optional(),

    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
       const user = await db.from('users').where('email', value).first()
        return !user
      }),

    password: vine.string().minLength(8).maxLength(32),

    roleId: vine.number().exists(async (db, value) => {
      const role = await db.from('roles').where('id', value).first()
      return !!role
    }),

    endereco: vine
      .object({
        rua: vine.string().optional(),
        numero: vine.number().optional(),
        cidade: vine.string().optional(),
        estado: vine.string().optional(),
      })
      .optional(),
  })
)