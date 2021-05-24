
import mongoose, { NativeError } from "mongoose";

import { config } from "../../../../../env/config";

const { protocol, host, password, user, db, params } = config.mongo;

export async function clientConnect() {
  const url = `${protocol}://${user}:${password}@${host}/${db}?${params}`;

  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }, (err: NativeError) => {
    if (err) {
      console.log("Error", err);

    }
    console.log("Connection Success!");

  });
}


