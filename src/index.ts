import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { bookRoutes } from "./interface/routes/bookRoutes";
import { errorHandler } from "./interface/middleware/errorHandler";
import { logger } from "./infrastructure/logger";
import { setupSwagger } from "./interface/swagger";
import { userRoutes } from "./interface/routes/UserRoutes";

const app = express();

app.use(express.json());
app.use("/api", bookRoutes);
app.use("/api", userRoutes);
app.use(errorHandler);
setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

