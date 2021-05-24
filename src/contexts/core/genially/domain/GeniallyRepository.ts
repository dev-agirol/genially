import Genially from "./Genially";

interface GeniallyRepository {
  save(genially: Genially): Promise<void>;

  update(genially: Partial<Genially>, id: string): Promise<Genially>;

  find(id: string): Promise<Genially>;

  delete(id: string): Promise<void>;

  getAll(): Promise<Genially[]>;

}

export default GeniallyRepository;
