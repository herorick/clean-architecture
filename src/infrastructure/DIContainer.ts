import { MongoBookRepository } from "./repositories/MongoBookRepository";
import { GetAllBooks } from "../use-cases/GetAllBooks";
import { MongoUserRepository } from "./repositories/MongoUserRepository";
import { GetUser } from "../use-cases/GetUser";
import { LoginUser } from "../use-cases/LoginUser";
import { RegisterUser } from "../use-cases/RegisterUser";

class DIContainer {
  private static _bookRepository = new MongoBookRepository();
  private static _userRepository = new MongoUserRepository();


  static getBookRepository() {
    return this._bookRepository;
  }

  static getUserRepository() {
    return this._userRepository;
  }

  static getGetAllBooksUseCase() {
    return new GetAllBooks(this.getBookRepository());
  }

  static getUserById(userId: string) {
    return new GetUser(this.getUserRepository(), userId)
  }

  static loginUserUseCase() {
    return new LoginUser(this.getUserRepository());
  }

  static registerUserUseCase() {
    return new RegisterUser(this.getUserRepository());
  }
}

export { DIContainer };

