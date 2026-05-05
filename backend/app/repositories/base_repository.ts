import type { LucidModel, LucidRow } from '@adonisjs/lucid/types/model'
import type BaseRepositoryInterface from '#repositories/interfaces/base_repository_interface'

export abstract class BaseRepository<T extends LucidRow> implements BaseRepositoryInterface<T> {
  // Recebe o model Lucid no construtor
  constructor(protected model: LucidModel) {}

  async all(): Promise<T[]> {
    return this.model.all() as Promise<T[]>
  }

  async allWith(relationships: string[]): Promise<T[]> {
    const query = this.model.query()
    if (relationships) {
      relationships.forEach((item) => {
        query.preload(item.trim() as any)
      })
    }
    return await query
  }

  async find(id: number | string): Promise<T | null> {
    return this.model.find(id) as Promise<T | null>
  }

  async findWith(id: number | string, relationships: string[]): Promise<T | null> {
    const query = this.model.query().where('id', 1)
    if (relationships) {
      relationships.forEach((item) => {
        query.preload(item.trim() as any)
      })
    }
    return await query
  }

  async create(payload: Partial<T>, trx?: any): Promise<T> {
    return this.model.create(payload, { client: trx }) as Promise<T>
  }

  async update(id: number | string, payload: Partial<T>): Promise<T> {
    const record = await this.model.find(id)
    if (!record) throw new Error('Record not found')
    record.merge(payload)
    return record.save() as Promise<T>
  }

  async delete(id: number | string): Promise<boolean> {
    const record = await this.model.find(id)
    if (!record) return false

    try {
      await record.delete()
    } catch (error) {
      console.log('ERROR')
      return false
    }
    return true
  }
  async paginate(page: number, limit: number) {
    return await this.model.query().paginate(page, limit)
  }
}
