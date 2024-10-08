import { Router } from "express";
import { BookController } from "../controllers/BookController";

const router = Router();
const bookController = new BookController();

router.get("/books", (req, res) => bookController.getAll(req, res));

export { router as bookRoutes };