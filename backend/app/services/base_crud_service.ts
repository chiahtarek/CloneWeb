import type { BaseRepository } from '#repositories/base_repository'
import type BaseCrudInterface from './interfaces/base_crud_inerface.ts'

export class BaseCrudService<T, R extends BaseRepository<T>> implements BaseCrudInterface<T> {
  constructor(protected repository: R) {}

  public async index(): Promise<T[]> {
    return this.repository.all()
  }

  async indexWith(relationships: string[]): Promise<T[]> {
    return this.repository.allWith(relationships)
  }

  public async show(id: number): Promise<T | null> {
    return this.repository.find(id)
  }

  async showWith(id: number | string, relationships: string[]): Promise<T | null> {
    return this.repository.findWith(id, relationships)
  }

  public async store(payload: Partial<T>): Promise<T> {
    return this.repository.create(payload)
  }

  public async update(id: number, payload: Partial<T>): Promise<T> {
    return this.repository.update(id, payload)
  }

  public async delete(id: number): Promise<boolean> {
    return this.repository.delete(id)
  }
}
