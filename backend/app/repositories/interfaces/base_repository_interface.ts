/*
  O "T" funciona como um "espaço reservado" (placeholder) para
  um tipo que será definido depois. Quando você for usar,
  você diz: BaseRepositoryInterface<Curso>. O TypeScript então
  entende que, naquele caso, o T vale Curso.
*/
export default interface BaseRepositoryInterface<T> {
  all(): Promise<T[]>
  allWith(relationships: string[]): Promise<T[]>
  find(id: number | string): Promise<T | null>
  findWith(id: number | string, relationships: string[]): Promise<T | null>
  create(payload: Partial<T>): Promise<T>
  update(id: number | string, payload: Partial<T>): Promise<T>
  delete(id: number | string): Promise<boolean>
}
