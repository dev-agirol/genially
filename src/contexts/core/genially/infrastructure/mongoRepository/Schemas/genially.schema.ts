// External modules
import mongoose from "mongoose";

// Domain
import Genially from "../../../domain/Genially";


const Schema = mongoose.Schema;

interface GeniallyDoc extends mongoose.Document {
  _id: string;
  name: string;
  description: string;
  createdAt: Date;
  modifiedAt: Date;
  deletedAt: Date;
}


interface GeniallyModelInterface extends mongoose.Model<GeniallyDoc> {
  build(attrs: Genially): GeniallyDoc;
}


const GeniallySchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String },
  description: { type: String },
  createdAt: { type: Date },
  modifiedAt: { type: Date },
  deletedAt: { type: Date }
});

let Repository: GeniallyModelInterface = null;

GeniallySchema.statics.build = (attrs: Genially) => {
  const _id = attrs.id;
  const { name, description, createdAt, modifiedAt, deletedAt } = attrs;
  return new Repository({ _id, name, description, createdAt, modifiedAt, deletedAt });
};

Repository = mongoose.model<GeniallyDoc, GeniallyModelInterface>("Genially", GeniallySchema);


export const GeniallyRepo = Repository;

export const mapperGeniallyDocToGenially = (doc: GeniallyDoc): Genially => {
  if (!doc) {
    return;
  }

  const { _id, name, description, createdAt, modifiedAt, deletedAt } = doc;

  return {
    id: _id.toString(),
    name: name.toString(),
    description: description.toString(),
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    deletedAt: deletedAt
  } as Genially;
};


