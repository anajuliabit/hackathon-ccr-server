import bcrypt from 'bcryptjs';

import UserService from '../services/userService';
import { Resolvers } from '../types/graphql';
import { User, Journey } from '@prisma/client';
import JourneyService from '../services/journeyService';

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
    startJourney: async (
      parent,
      { jumpingOff, destination, outputTime, user },
      { prisma }
    ): Promise<Journey> => {
      const service = new JourneyService(prisma);
      return service.start(jumpingOff, destination, new Date(outputTime), user);
    },
  },
};
