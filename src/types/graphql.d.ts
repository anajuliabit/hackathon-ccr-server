import { IResolvers } from 'apollo-server';
import { PrismaClient } from '@prisma/client';

type ResolverFunction = (parent: any, args: any, context: Context) => any;
type Context = {
  prisma: PrismaClient;
};

interface ResolverMap {
  [field: string]: ResolverFunction;
}

interface Resolvers extends IResolvers {
  Query: ResolverMap;
  Mutation: ResolverMap;
}
