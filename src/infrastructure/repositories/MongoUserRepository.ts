import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/interfaces/UserRepository";
import UserModel from "../models/UserModel";

export class MongoUserRepository implements UserRepository {
  async findAll(): Promise<User[]> {
    return await UserModel.find();
  }

  async findById(id: string): Promise<User | null> {
    return await UserModel.findById(id);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await UserModel.findOne({
      email
    });
  }

  async create(user: User): Promise<User> {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser;
  }

  async update(user: User): Promise<void> {
    await UserModel.findByIdAndUpdate(user.id, user);
  }

  async delete(user: string): Promise<void> {
    await UserModel.findByIdAndDelete(user);
  }

  async findByCredentials(email: string, password: string): Promise<User | null> {
    return await UserModel.findByCredentials(email, password);
  } 
}
