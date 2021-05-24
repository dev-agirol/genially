import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";

type CreateGeniallyServiceRequest = {
  id: string;
  name: string;
  description: string;
};

export default class CreateGeniallyService {
  constructor(private repository: GeniallyRepository) { }

  public async execute(req: CreateGeniallyServiceRequest): Promise<Genially> {
    const { id, name, description } = req;
    const exist = await this.repository.find(id);
    if (exist) {
      throw new Error("There is already a genially with this id.");
    }
    const genially = new Genially(id, name, description);

    await this.repository.save(genially);

    return genially;
  }
}
