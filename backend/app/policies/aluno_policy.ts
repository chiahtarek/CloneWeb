import { permissions } from '../utils/permissions.ts'
import { BasePolicy } from './bases_policy.ts'

export default class AlunoPolicy extends BasePolicy {
  constructor() {
    super(permissions.aluno)
  }
}
