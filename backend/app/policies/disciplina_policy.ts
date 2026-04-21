import { permissions } from '../utils/permissions.ts'
import { BasePolicy } from './bases_policy.ts'

export default class DisciplinaPolicy extends BasePolicy {
  constructor() {
    super(permissions.disciplina)
  }
}
