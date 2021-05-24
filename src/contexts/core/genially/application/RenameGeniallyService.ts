import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";

export default class RenameGeniallyService {
  constructor(private repository: GeniallyRepository) { }
  public async execute(name: string, id: string): Promise<Genially> {
    const genially = await this.repository.find(id);

    if (!genially) {
      throw new Error("Genially not found.");
    }

    const update = { ...genially, name, modifiedAt: new Date() } as Genially;
    const updated = await this.repository.update(update, id);

    return updated;
  }
}
