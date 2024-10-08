import { User } from "../entities/User";

export interface UserRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByEmail(id: string): Promise<User | null>;
  create(book: User): Promise<User>;
  update(book: User): Promise<void>;
  delete(id: string): Promise<void>;
  findByCredentials(email: string, password: string): Promise<User | null>;
}
