import { app } from "./app";
import { startDatabase } from "./database";
import "dotenv/config";

const PORT: number = Number(process.env.APP_PORT!);
const runningMsg: string = `Server is running on port http://localhost:${PORT}`;

app.listen(PORT, async () => {
  await startDatabase();
  console.log(runningMsg);
});
