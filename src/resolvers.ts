import bcrypt from 'bcryptjs';

import UserService from './services/userService';
import { Resolvers } from './types/graphql';
import { User } from '@prisma/client';

export const resolvers: Resolvers = {
  Query: {
    user: async (parent, { id }: User, { prisma }): Promise<User | null> => {
      const service = new UserService(prisma);
      return service.get(id);
    },
    login: async (parent, { email, password }, { prisma }) => {
      const service = new UserService(prisma);
      return service.login(email, password);
    },
  },
  Mutation: {
    registerUser: async (
      parent,
      { name, email, password },
      { prisma }
    ): Promise<User> => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const service = new UserService(prisma);
      return service.create(name, email, hashedPassword);
    },
  },
};
