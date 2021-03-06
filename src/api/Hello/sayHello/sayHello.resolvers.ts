import { SayHelloQueryArgs } from 'types/schema'

const resolvers = {
  Query: {
    sayHello: (_, args: SayHelloQueryArgs): string =>
      `Hello From Server ${args.name}`,
  },
}

export default resolvers
