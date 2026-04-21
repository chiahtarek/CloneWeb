const permissions = {
  curso: [
    // COORDENADOR
    {
      list: true,
      view: true,
      create: true,
      edit: true,
      delete: true,
    },
    // PROFESSOR
    {
      list: true,
      view: true,
      create: true,
      edit: false,
      delete: false,
    },
  ],
  aluno: [
    // COORDENADOR
    {
      list: true,
      view: true,
      create: true,
      edit: false,
      delete: false,
    },
    // PROFESSOR
    {
      list: true,
      view: true,
      create: false,
      edit: false,
      delete: false,
    },
  ],
  disciplina: [
    // COORDENADOR
    {
      list: true,
      view: true,
      create: false,
      edit: false,
      delete: false,
    },
    // PROFESSOR
    {
      list: true,
      view: true,
      create: true,
      edit: true,
      delete: true,
    },
  ],
  matricula: [
    // COORDENADOR
    {
      list: true,
      view: true,
      create: true,
      edit: true,
      delete: true,
    },
    // PROFESSOR
    {
      list: false,
      view: false,
      create: true,
      edit: false,
      delete: false,
    },
  ],
}

export { permissions }
