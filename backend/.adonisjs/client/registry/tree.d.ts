/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  cursos: {
    index: typeof routes['cursos.index']
    create: typeof routes['cursos.create']
    store: typeof routes['cursos.store']
    show: typeof routes['cursos.show']
    edit: typeof routes['cursos.edit']
    update: typeof routes['cursos.update']
    destroy: typeof routes['cursos.destroy']
  }
  alunos: {
    index: typeof routes['alunos.index']
    create: typeof routes['alunos.create']
    store: typeof routes['alunos.store']
    show: typeof routes['alunos.show']
    edit: typeof routes['alunos.edit']
    update: typeof routes['alunos.update']
    destroy: typeof routes['alunos.destroy']
  }
  disciplinas: {
    index: typeof routes['disciplinas.index']
    create: typeof routes['disciplinas.create']
    store: typeof routes['disciplinas.store']
    show: typeof routes['disciplinas.show']
    edit: typeof routes['disciplinas.edit']
    update: typeof routes['disciplinas.update']
    destroy: typeof routes['disciplinas.destroy']
  }
  matriculas: {
    index: typeof routes['matriculas.index']
    create: typeof routes['matriculas.create']
    store: typeof routes['matriculas.store']
    show: typeof routes['matriculas.show']
    edit: typeof routes['matriculas.edit']
    update: typeof routes['matriculas.update']
    destroy: typeof routes['matriculas.destroy']
  }
  auth: {
    register: typeof routes['auth.register']
    login: typeof routes['auth.login']
    logout: typeof routes['auth.logout']
    me: typeof routes['auth.me']
    tokens: typeof routes['auth.tokens']
    createToken: typeof routes['auth.create_token']
  }
}
