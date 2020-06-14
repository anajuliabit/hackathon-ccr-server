import { PrismaClient, Journey } from '@prisma/client';

export default class JourneyService {
  constructor(private repository: PrismaClient) {}

  async start(
    jumpingOff: string,
    destination: string,
    outputTime: Date,
    userId: number
  ): Promise<Journey> {
    return await this.repository.journey.create({
      data: {
        jumpingoff: jumpingOff,
        destination: destination,
        inputtime: new Date(Date.now()),
        outputtime: outputTime,
        userid: userId,
      },
    });
  }
}
