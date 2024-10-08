import { Request, Response } from 'express';
import { validate } from 'class-validator';
import { LoginDto } from '../dto/LoginDto';
import { RegisterDto } from '../../interface/dto/RegisterDto';
import { DIContainer } from '../../infrastructure/DIContainer';

export class UserController {
  private loginUserCase = DIContainer.loginUserUseCase();
  private registerUserUseCase = DIContainer.registerUserUseCase();

  async registerUser(req: Request, res: Response) {
    const dto = Object.assign(new RegisterDto(), req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      res.status(400).json({ errors });
    }

    this.registerUserUseCase.execute({
      id: 'ád',
      _id: '',
      tokens: [],
      name: dto.name,
      password: dto.password,
    });
  }

  async loginUser(req: Request, res: Response) {
    const dto = Object.assign(new LoginDto(), req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      res.status(400).json({ errors });
    }

    this.loginUserCase.execute(dto.email, dto.password);

    // Proceed with the creation logic...
  }
}
