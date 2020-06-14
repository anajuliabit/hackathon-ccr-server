import { PrismaClient, User } from '@prisma/client';

export default class StationService {
  constructor(private repository: PrismaClient) {}

  async create(name: string, email: string, password: string): Promise<User> {
    return this.repository.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  }

  async get(id: number): Promise<User | null> {
    return this.repository.user.findOne({ where: { id } });
  }
}
