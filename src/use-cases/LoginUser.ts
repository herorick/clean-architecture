import { User } from '../domain/entities/User';
import { UserRepository } from '../domain/interfaces/UserRepository';

export class LoginUser {
  constructor(
    private userRepository: UserRepository,
  ) {}

  async execute(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);

     if (!user) {
      throw new Error('User not found');
    }

    this.userRepository.findByCredentials(email, password);
  }
}
