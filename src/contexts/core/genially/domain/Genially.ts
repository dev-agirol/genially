export default class Genially {
  private _id: string;
  private _name: string;
  private _description: string;
  private _createdAt: Date;
  private _modifiedAt: Date;
  private _deletedAt: Date;

  constructor(id: string, name: string, description?: string) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._createdAt = new Date();
  }

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get description(): string {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(createdAt: Date) {
    this._createdAt = createdAt;
  }

  get modifiedAt(): Date {
    return this._modifiedAt;
  }

  set modifiedAt(modifiedAt: Date) {
    this._modifiedAt = modifiedAt;
  }
  get deletedAt(): Date {
    return this._deletedAt;
  }

  set deletedAt(deletedAt: Date) {
    this._deletedAt = deletedAt;
  }

}
