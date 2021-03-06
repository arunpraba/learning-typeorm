import * as express from 'express'
import * as helmet from 'helmet'
import * as cors from 'cors'

import { gql, ApolloServer } from 'apollo-server-express'
import { schema } from './schema'
import { connectToDb } from './configs/db'

const PORT = 4000

export const startServer = async () => {
  const app = express()

  const server = new ApolloServer({ schema })

  server.applyMiddleware({ app })

  app.use(helmet())
  app.use(cors())

  await connectToDb()
  app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  )
}
