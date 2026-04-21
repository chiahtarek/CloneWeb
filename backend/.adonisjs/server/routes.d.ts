import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'cursos.index': { paramsTuple?: []; params?: {} }
    'cursos.create': { paramsTuple?: []; params?: {} }
    'cursos.store': { paramsTuple?: []; params?: {} }
    'cursos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'cursos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'cursos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'cursos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'alunos.index': { paramsTuple?: []; params?: {} }
    'alunos.create': { paramsTuple?: []; params?: {} }
    'alunos.store': { paramsTuple?: []; params?: {} }
    'alunos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'alunos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'alunos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'alunos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'disciplinas.index': { paramsTuple?: []; params?: {} }
    'disciplinas.create': { paramsTuple?: []; params?: {} }
    'disciplinas.store': { paramsTuple?: []; params?: {} }
    'disciplinas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'disciplinas.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'disciplinas.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'disciplinas.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'matriculas.index': { paramsTuple?: []; params?: {} }
    'matriculas.create': { paramsTuple?: []; params?: {} }
    'matriculas.store': { paramsTuple?: []; params?: {} }
    'matriculas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'matriculas.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'matriculas.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'matriculas.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'auth.register': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'auth.logout': { paramsTuple?: []; params?: {} }
    'auth.me': { paramsTuple?: []; params?: {} }
    'auth.tokens': { paramsTuple?: []; params?: {} }
    'auth.create_token': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'cursos.index': { paramsTuple?: []; params?: {} }
    'cursos.create': { paramsTuple?: []; params?: {} }
    'cursos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'cursos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'alunos.index': { paramsTuple?: []; params?: {} }
    'alunos.create': { paramsTuple?: []; params?: {} }
    'alunos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'alunos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'disciplinas.index': { paramsTuple?: []; params?: {} }
    'disciplinas.create': { paramsTuple?: []; params?: {} }
    'disciplinas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'disciplinas.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'matriculas.index': { paramsTuple?: []; params?: {} }
    'matriculas.create': { paramsTuple?: []; params?: {} }
    'matriculas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'matriculas.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'auth.me': { paramsTuple?: []; params?: {} }
    'auth.tokens': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'cursos.index': { paramsTuple?: []; params?: {} }
    'cursos.create': { paramsTuple?: []; params?: {} }
    'cursos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'cursos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'alunos.index': { paramsTuple?: []; params?: {} }
    'alunos.create': { paramsTuple?: []; params?: {} }
    'alunos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'alunos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'disciplinas.index': { paramsTuple?: []; params?: {} }
    'disciplinas.create': { paramsTuple?: []; params?: {} }
    'disciplinas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'disciplinas.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'matriculas.index': { paramsTuple?: []; params?: {} }
    'matriculas.create': { paramsTuple?: []; params?: {} }
    'matriculas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'matriculas.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'auth.me': { paramsTuple?: []; params?: {} }
    'auth.tokens': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'cursos.store': { paramsTuple?: []; params?: {} }
    'alunos.store': { paramsTuple?: []; params?: {} }
    'disciplinas.store': { paramsTuple?: []; params?: {} }
    'matriculas.store': { paramsTuple?: []; params?: {} }
    'auth.register': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'auth.logout': { paramsTuple?: []; params?: {} }
    'auth.create_token': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'cursos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'alunos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'disciplinas.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'matriculas.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'cursos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'alunos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'disciplinas.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'matriculas.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'cursos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'alunos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'disciplinas.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'matriculas.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}