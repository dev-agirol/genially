import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";

export default class GetAllGeniallyService {
  constructor(private repository: GeniallyRepository) { }
  public async execute(): Promise<Genially[]> {
    return this.repository.getAll();
  }
}
