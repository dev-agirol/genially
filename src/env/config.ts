
interface IConfig {
  mongo: {
    protocol: string,
    host: string,
    password: string,
    user: string,
    collection: string,
    db: string,
    params: string
  },
  repository: "mongo" | "memory"
}


export const config: IConfig = {
  mongo: {
    protocol: "mongodb+srv",
    host: "cluster0.v8gl6.mongodb.net",
    password: "Genially20201",
    user: "test",
    collection: "genially",
    db: "test",
    params: "retryWrites=true&w=majority"
  },
  repository: "mongo"
};