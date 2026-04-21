export const policies = {
  AlunoPolicy: () => import('#policies/aluno_policy'),
  BasesPolicy: () => import('#policies/bases_policy'),
  CursoPolicy: () => import('#policies/curso_policy'),
  DisciplinaPolicy: () => import('#policies/disciplina_policy'),
  InterfacesPermissionInterfacePolicy: () => import('#policies/interfaces/permission_interface'),
  MatriculaPolicy: () => import('#policies/matricula_policy'),
}

