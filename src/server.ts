import { AppDataSource } from "./data-source";
import app from "./app";
import "dotenv/config";

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connected.");

    const PORT = parseInt(process.env.PORT!) || 3000;
    app.listen(PORT, () => {
      console.log(`App is running on https://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error(err));
