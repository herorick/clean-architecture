import { UserRepository } from "../domain/interfaces/UserRepository";

export class GetUser {
  constructor(
    private userRepository: UserRepository,
    private userId: string,
  ) {}

  async execute() {
    return await this.userRepository.findById(this.userId);
  }
}
