import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";

export default class DeleteGeniallyService {
  constructor(private repository: GeniallyRepository) { }

  public async execute(id: string): Promise<Genially> {
    const genially = await this.repository.find(id);

    if (!genially) {
      throw new Error("Genially not found.");
    }

    const update = { ...genially, deletedAt: new Date() } as Genially;
    const updated = await this.repository.update(update, id);

    return updated;
  }
}
