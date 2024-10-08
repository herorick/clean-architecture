import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();
const userController = new UserController();

router.post('/login', userController.loginUser);
router.post('/register', userController.registerUser);

export { router as userRoutes };
