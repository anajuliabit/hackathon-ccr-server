import { PrismaClient, Journey, User } from '@prisma/client';

export default class JourneyService {
  constructor(private repository: PrismaClient) {}

  async start(
    jumpingOff: string,
    destination: string,
    outputTime: Date
  ): Promise<Journey> {
    return await this.repository.journey.create({
      data: {
        jumpingoff: jumpingOff,
        destination: destination,
        inputtime: new Date(Date.now()),
        outputtime: outputTime,
      },
    });
  }
}
