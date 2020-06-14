import { PrismaClient, User, UserClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export default class StationService {
  constructor(private repository: PrismaClient) {}

  async create(name: string, email: string, password: string): Promise<User> {
    return await this.repository.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  }

  async get(id: number): Promise<User | null> {
    return await this.repository.user.findOne({ where: { id } });
  }

  async login(email: string, password: string) {
    const user: User | null = await this.repository.user.findOne({
      where: { email },
    });
    if (!user) {
      throw new Error('Invalid Login');
    }
    const passwordMatch = await bcrypt.compare(password, user?.password);
    if (!passwordMatch) {
      throw new Error('Invalid Login');
    }
    const token = jwt.sign(
      {
        id: user.id,
        username: user.email,
      },
      'my-secret-from-env-file-in-prod',
      {
        expiresIn: '30d', // token will expire in 30days
      }
    );
    return {
      token,
      email: user?.email,
    };
  }
}
