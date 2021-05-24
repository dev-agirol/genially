import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";

export default class DeleteGeniallyService {
  constructor(private repository: GeniallyRepository) { }

  public async execute(id: string): Promise<Genially> {
    const genially = await this.repository.find(id);

    if (!genially || genially.deletedAt) {
      throw new Error("Genially not found.");
    }


    genially.deletedAt = new Date();

    const updated = await this.repository.update(genially, id);

    return updated;
  }
}
