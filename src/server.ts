import { app } from "./app";
import { startDatabase } from "./database";

const PORT: number = 3000;
const runningMsg: string = `Server is running on port http://localhost:${PORT}`;

app.listen(PORT, async () => {
  await startDatabase();
  console.log(runningMsg);
});
