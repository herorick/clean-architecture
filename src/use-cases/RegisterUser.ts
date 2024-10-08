import { User } from '../domain/entities/User';
import { UserRepository } from '../domain/interfaces/UserRepository';

export class RegisterUser {
  constructor(
    private userRepository: UserRepository,
  ) {}

  async execute(user: User) {
    return await this.userRepository.create(user);
  }
}
