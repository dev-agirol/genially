
// Domain 
import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";


export default class InMemoryGeniallyRepository implements GeniallyRepository {
  private geniallys: Genially[];

  constructor() {
    this.geniallys = [];
  }

  async save(genially: Genially): Promise<void> {
    await this.delete(genially.id);
    this.geniallys.push(genially);
  }

  async find(id: string): Promise<Genially> {
    return this.geniallys.find((genially) => genially.id === id);
  }

  async delete(id: string): Promise<void> {
    this.geniallys = this.geniallys.filter((genially) => genially.id !== id);
  }
  async update(update: Partial<Genially>, id: string): Promise<Genially> {
    const before = await this.find(id);
    const updated = { ...before, ...update } as Genially;
    this.geniallys = [...this.geniallys.filter((genially) => genially.id !== id), updated];
    return updated;
  }

  async getAll(): Promise<Genially[]> {
    return this.geniallys;
  }
}
