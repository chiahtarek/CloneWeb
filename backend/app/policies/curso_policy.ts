import { permissions } from '../utils/permissions.ts'
import { BasePolicy } from './bases_policy.ts'

export default class CursoPolicy extends BasePolicy {
  constructor() {
    super(permissions.curso)
  }
}
