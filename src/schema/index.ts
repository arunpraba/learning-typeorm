import * as path from 'path'
import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

const allTypes: GraphQLSchema[] = loadFilesSync(
  path.join(__dirname, '../api/**/*.graphql')
)

const allResolvers = loadFilesSync(
  path.join(__dirname, '../api/**/*.resolvers.*')
)

const typeDefs = mergeTypeDefs(allTypes)
const resolvers = mergeResolvers(allResolvers)

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
