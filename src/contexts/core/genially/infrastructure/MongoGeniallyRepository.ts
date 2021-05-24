// Domain
import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";

// Mongo Repo
import { GeniallyRepo, mapperGeniallyDocToGenially } from "./mongoRepository/Schemas/genially.schema";

export default class MongoGeniallyRepository implements GeniallyRepository {


  async save(genially: Genially): Promise<void> {
    const geniallyDoc = GeniallyRepo.build(genially);
    await geniallyDoc.save();
  }

  async update(update: Genially, id: string): Promise<Genially> {

    const geniallyDoc = GeniallyRepo.build(update);
    await GeniallyRepo.updateOne({ _id: id }, geniallyDoc);
    return update;
  }

  async find(id: string): Promise<Genially> {
    try {
      const [doc] = await GeniallyRepo.find({ _id: id });
      return mapperGeniallyDocToGenially(doc);
    } catch (err) {
      console.log(err);

    }
  }

  async delete(id: string): Promise<void> {
    return;
  }

  async getAll(): Promise<Genially[]> {
    try {
      const docs = await GeniallyRepo.find({});

      return docs.map(mapperGeniallyDocToGenially);
    } catch (err) {
      console.log(err);

    }

  }
}
