import { createConnection } from 'typeorm'

export const connectToDb = async (): Promise<void> => {
  await createConnection()
}
