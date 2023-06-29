import {MongoClient, Db} from 'mongodb'
import {callbackify} from 'util'

export type MongoDB = Db
export type ConnectCallBack = (db: MongoDB) => void

export const connectAndUseDB = async (
  callback: ConnectCallBack,
  dbName: string,
  mongoUrl: string = 'mongodb://localhost:27017'
) => {
  let connection

  try {
    connection = await MongoClient.connect(mongoUrl) //mongo db connect
    const db: Db = connection.db(dbName) //mongoshell use dbname
    callback(db)
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message)
    }
  }
}
