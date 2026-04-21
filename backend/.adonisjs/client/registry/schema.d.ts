/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'cursos.index': {
    methods: ["GET","HEAD"]
    pattern: '/cursos'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'cursos.create': {
    methods: ["GET","HEAD"]
    pattern: '/cursos/create'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'cursos.store': {
    methods: ["POST"]
    pattern: '/cursos'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'cursos.show': {
    methods: ["GET","HEAD"]
    pattern: '/cursos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'cursos.edit': {
    methods: ["GET","HEAD"]
    pattern: '/cursos/:id/edit'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'cursos.update': {
    methods: ["PUT","PATCH"]
    pattern: '/cursos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'cursos.destroy': {
    methods: ["DELETE"]
    pattern: '/cursos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'alunos.index': {
    methods: ["GET","HEAD"]
    pattern: '/alunos'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'alunos.create': {
    methods: ["GET","HEAD"]
    pattern: '/alunos/create'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'alunos.store': {
    methods: ["POST"]
    pattern: '/alunos'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'alunos.show': {
    methods: ["GET","HEAD"]
    pattern: '/alunos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'alunos.edit': {
    methods: ["GET","HEAD"]
    pattern: '/alunos/:id/edit'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'alunos.update': {
    methods: ["PUT","PATCH"]
    pattern: '/alunos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'alunos.destroy': {
    methods: ["DELETE"]
    pattern: '/alunos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'disciplinas.index': {
    methods: ["GET","HEAD"]
    pattern: '/disciplinas'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'disciplinas.create': {
    methods: ["GET","HEAD"]
    pattern: '/disciplinas/create'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'disciplinas.store': {
    methods: ["POST"]
    pattern: '/disciplinas'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'disciplinas.show': {
    methods: ["GET","HEAD"]
    pattern: '/disciplinas/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'disciplinas.edit': {
    methods: ["GET","HEAD"]
    pattern: '/disciplinas/:id/edit'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'disciplinas.update': {
    methods: ["PUT","PATCH"]
    pattern: '/disciplinas/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'disciplinas.destroy': {
    methods: ["DELETE"]
    pattern: '/disciplinas/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'matriculas.index': {
    methods: ["GET","HEAD"]
    pattern: '/matriculas'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'matriculas.create': {
    methods: ["GET","HEAD"]
    pattern: '/matriculas/create'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'matriculas.store': {
    methods: ["POST"]
    pattern: '/matriculas'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'matriculas.show': {
    methods: ["GET","HEAD"]
    pattern: '/matriculas/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'matriculas.edit': {
    methods: ["GET","HEAD"]
    pattern: '/matriculas/:id/edit'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'matriculas.update': {
    methods: ["PUT","PATCH"]
    pattern: '/matriculas/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'matriculas.destroy': {
    methods: ["DELETE"]
    pattern: '/matriculas/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'auth.register': {
    methods: ["POST"]
    pattern: '/auth/register'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'auth.login': {
    methods: ["POST"]
    pattern: '/auth/login'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'auth.logout': {
    methods: ["POST"]
    pattern: '/auth/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'auth.me': {
    methods: ["GET","HEAD"]
    pattern: '/auth/me'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'auth.tokens': {
    methods: ["GET","HEAD"]
    pattern: '/auth/tokens'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'auth.create_token': {
    methods: ["POST"]
    pattern: '/auth/tokens'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
}
