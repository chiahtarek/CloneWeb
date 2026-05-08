/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'cursos.index': {
    methods: ["GET","HEAD"],
    pattern: '/cursos',
    tokens: [{"old":"/cursos","type":0,"val":"cursos","end":""}],
    types: placeholder as Registry['cursos.index']['types'],
  },
  'cursos.create': {
    methods: ["GET","HEAD"],
    pattern: '/cursos/create',
    tokens: [{"old":"/cursos/create","type":0,"val":"cursos","end":""},{"old":"/cursos/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['cursos.create']['types'],
  },
  'cursos.store': {
    methods: ["POST"],
    pattern: '/cursos',
    tokens: [{"old":"/cursos","type":0,"val":"cursos","end":""}],
    types: placeholder as Registry['cursos.store']['types'],
  },
  'cursos.show': {
    methods: ["GET","HEAD"],
    pattern: '/cursos/:id',
    tokens: [{"old":"/cursos/:id","type":0,"val":"cursos","end":""},{"old":"/cursos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cursos.show']['types'],
  },
  'cursos.edit': {
    methods: ["GET","HEAD"],
    pattern: '/cursos/:id/edit',
    tokens: [{"old":"/cursos/:id/edit","type":0,"val":"cursos","end":""},{"old":"/cursos/:id/edit","type":1,"val":"id","end":""},{"old":"/cursos/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['cursos.edit']['types'],
  },
  'cursos.update': {
    methods: ["PUT","PATCH"],
    pattern: '/cursos/:id',
    tokens: [{"old":"/cursos/:id","type":0,"val":"cursos","end":""},{"old":"/cursos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cursos.update']['types'],
  },
  'cursos.destroy': {
    methods: ["DELETE"],
    pattern: '/cursos/:id',
    tokens: [{"old":"/cursos/:id","type":0,"val":"cursos","end":""},{"old":"/cursos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cursos.destroy']['types'],
  },
  'alunos.index': {
    methods: ["GET","HEAD"],
    pattern: '/alunos',
    tokens: [{"old":"/alunos","type":0,"val":"alunos","end":""}],
    types: placeholder as Registry['alunos.index']['types'],
  },
  'alunos.create': {
    methods: ["GET","HEAD"],
    pattern: '/alunos/create',
    tokens: [{"old":"/alunos/create","type":0,"val":"alunos","end":""},{"old":"/alunos/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['alunos.create']['types'],
  },
  'alunos.store': {
    methods: ["POST"],
    pattern: '/alunos',
    tokens: [{"old":"/alunos","type":0,"val":"alunos","end":""}],
    types: placeholder as Registry['alunos.store']['types'],
  },
  'alunos.show': {
    methods: ["GET","HEAD"],
    pattern: '/alunos/:id',
    tokens: [{"old":"/alunos/:id","type":0,"val":"alunos","end":""},{"old":"/alunos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['alunos.show']['types'],
  },
  'alunos.edit': {
    methods: ["GET","HEAD"],
    pattern: '/alunos/:id/edit',
    tokens: [{"old":"/alunos/:id/edit","type":0,"val":"alunos","end":""},{"old":"/alunos/:id/edit","type":1,"val":"id","end":""},{"old":"/alunos/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['alunos.edit']['types'],
  },
  'alunos.update': {
    methods: ["PUT","PATCH"],
    pattern: '/alunos/:id',
    tokens: [{"old":"/alunos/:id","type":0,"val":"alunos","end":""},{"old":"/alunos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['alunos.update']['types'],
  },
  'alunos.destroy': {
    methods: ["DELETE"],
    pattern: '/alunos/:id',
    tokens: [{"old":"/alunos/:id","type":0,"val":"alunos","end":""},{"old":"/alunos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['alunos.destroy']['types'],
  },
  'disciplinas.index': {
    methods: ["GET","HEAD"],
    pattern: '/disciplinas',
    tokens: [{"old":"/disciplinas","type":0,"val":"disciplinas","end":""}],
    types: placeholder as Registry['disciplinas.index']['types'],
  },
  'disciplinas.create': {
    methods: ["GET","HEAD"],
    pattern: '/disciplinas/create',
    tokens: [{"old":"/disciplinas/create","type":0,"val":"disciplinas","end":""},{"old":"/disciplinas/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['disciplinas.create']['types'],
  },
  'disciplinas.store': {
    methods: ["POST"],
    pattern: '/disciplinas',
    tokens: [{"old":"/disciplinas","type":0,"val":"disciplinas","end":""}],
    types: placeholder as Registry['disciplinas.store']['types'],
  },
  'disciplinas.show': {
    methods: ["GET","HEAD"],
    pattern: '/disciplinas/:id',
    tokens: [{"old":"/disciplinas/:id","type":0,"val":"disciplinas","end":""},{"old":"/disciplinas/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['disciplinas.show']['types'],
  },
  'disciplinas.edit': {
    methods: ["GET","HEAD"],
    pattern: '/disciplinas/:id/edit',
    tokens: [{"old":"/disciplinas/:id/edit","type":0,"val":"disciplinas","end":""},{"old":"/disciplinas/:id/edit","type":1,"val":"id","end":""},{"old":"/disciplinas/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['disciplinas.edit']['types'],
  },
  'disciplinas.update': {
    methods: ["PUT","PATCH"],
    pattern: '/disciplinas/:id',
    tokens: [{"old":"/disciplinas/:id","type":0,"val":"disciplinas","end":""},{"old":"/disciplinas/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['disciplinas.update']['types'],
  },
  'disciplinas.destroy': {
    methods: ["DELETE"],
    pattern: '/disciplinas/:id',
    tokens: [{"old":"/disciplinas/:id","type":0,"val":"disciplinas","end":""},{"old":"/disciplinas/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['disciplinas.destroy']['types'],
  },
  'matriculas.index': {
    methods: ["GET","HEAD"],
    pattern: '/matriculas',
    tokens: [{"old":"/matriculas","type":0,"val":"matriculas","end":""}],
    types: placeholder as Registry['matriculas.index']['types'],
  },
  'matriculas.create': {
    methods: ["GET","HEAD"],
    pattern: '/matriculas/create',
    tokens: [{"old":"/matriculas/create","type":0,"val":"matriculas","end":""},{"old":"/matriculas/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['matriculas.create']['types'],
  },
  'matriculas.store': {
    methods: ["POST"],
    pattern: '/matriculas',
    tokens: [{"old":"/matriculas","type":0,"val":"matriculas","end":""}],
    types: placeholder as Registry['matriculas.store']['types'],
  },
  'matriculas.show': {
    methods: ["GET","HEAD"],
    pattern: '/matriculas/:id',
    tokens: [{"old":"/matriculas/:id","type":0,"val":"matriculas","end":""},{"old":"/matriculas/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['matriculas.show']['types'],
  },
  'matriculas.edit': {
    methods: ["GET","HEAD"],
    pattern: '/matriculas/:id/edit',
    tokens: [{"old":"/matriculas/:id/edit","type":0,"val":"matriculas","end":""},{"old":"/matriculas/:id/edit","type":1,"val":"id","end":""},{"old":"/matriculas/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['matriculas.edit']['types'],
  },
  'matriculas.update': {
    methods: ["PUT","PATCH"],
    pattern: '/matriculas/:id',
    tokens: [{"old":"/matriculas/:id","type":0,"val":"matriculas","end":""},{"old":"/matriculas/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['matriculas.update']['types'],
  },
  'matriculas.destroy': {
    methods: ["DELETE"],
    pattern: '/matriculas/:id',
    tokens: [{"old":"/matriculas/:id","type":0,"val":"matriculas","end":""},{"old":"/matriculas/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['matriculas.destroy']['types'],
  },
  'conta.index': {
    methods: ["GET","HEAD"],
    pattern: '/conta',
    tokens: [{"old":"/conta","type":0,"val":"conta","end":""}],
    types: placeholder as Registry['conta.index']['types'],
  },
  'conta.create': {
    methods: ["GET","HEAD"],
    pattern: '/conta/create',
    tokens: [{"old":"/conta/create","type":0,"val":"conta","end":""},{"old":"/conta/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['conta.create']['types'],
  },
  'conta.store': {
    methods: ["POST"],
    pattern: '/conta',
    tokens: [{"old":"/conta","type":0,"val":"conta","end":""}],
    types: placeholder as Registry['conta.store']['types'],
  },
  'conta.show': {
    methods: ["GET","HEAD"],
    pattern: '/conta/:id',
    tokens: [{"old":"/conta/:id","type":0,"val":"conta","end":""},{"old":"/conta/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['conta.show']['types'],
  },
  'conta.edit': {
    methods: ["GET","HEAD"],
    pattern: '/conta/:id/edit',
    tokens: [{"old":"/conta/:id/edit","type":0,"val":"conta","end":""},{"old":"/conta/:id/edit","type":1,"val":"id","end":""},{"old":"/conta/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['conta.edit']['types'],
  },
  'conta.update': {
    methods: ["PUT","PATCH"],
    pattern: '/conta/:id',
    tokens: [{"old":"/conta/:id","type":0,"val":"conta","end":""},{"old":"/conta/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['conta.update']['types'],
  },
  'conta.destroy': {
    methods: ["DELETE"],
    pattern: '/conta/:id',
    tokens: [{"old":"/conta/:id","type":0,"val":"conta","end":""},{"old":"/conta/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['conta.destroy']['types'],
  },
  'conta.transfer': {
    methods: ["POST"],
    pattern: '/transfer',
    tokens: [{"old":"/transfer","type":0,"val":"transfer","end":""}],
    types: placeholder as Registry['conta.transfer']['types'],
  },
  'auth.register': {
    methods: ["POST"],
    pattern: '/auth/register',
    tokens: [{"old":"/auth/register","type":0,"val":"auth","end":""},{"old":"/auth/register","type":0,"val":"register","end":""}],
    types: placeholder as Registry['auth.register']['types'],
  },
  'auth.login': {
    methods: ["POST"],
    pattern: '/auth/login',
    tokens: [{"old":"/auth/login","type":0,"val":"auth","end":""},{"old":"/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.login']['types'],
  },
  'auth.logout': {
    methods: ["POST"],
    pattern: '/auth/logout',
    tokens: [{"old":"/auth/logout","type":0,"val":"auth","end":""},{"old":"/auth/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['auth.logout']['types'],
  },
  'auth.me': {
    methods: ["GET","HEAD"],
    pattern: '/auth/me',
    tokens: [{"old":"/auth/me","type":0,"val":"auth","end":""},{"old":"/auth/me","type":0,"val":"me","end":""}],
    types: placeholder as Registry['auth.me']['types'],
  },
  'auth.tokens': {
    methods: ["GET","HEAD"],
    pattern: '/auth/tokens',
    tokens: [{"old":"/auth/tokens","type":0,"val":"auth","end":""},{"old":"/auth/tokens","type":0,"val":"tokens","end":""}],
    types: placeholder as Registry['auth.tokens']['types'],
  },
  'auth.create_token': {
    methods: ["POST"],
    pattern: '/auth/tokens',
    tokens: [{"old":"/auth/tokens","type":0,"val":"auth","end":""},{"old":"/auth/tokens","type":0,"val":"tokens","end":""}],
    types: placeholder as Registry['auth.create_token']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
