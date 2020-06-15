import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { PrismaClient } from '@prisma/client';
import { Context } from './types/graphql';

const context: Partial<Context> = {
  prisma: new PrismaClient(),
};

(async () => {
  const { port } = await new ApolloServer({
    typeDefs,
    resolvers,
    context,
  }).listen({ port: 3000 });

  console.log(`GraphQL playground on http://localhost:${port}`);
})();
