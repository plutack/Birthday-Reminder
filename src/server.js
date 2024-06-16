import express from "express";
import { join } from "node:path";
const port = 3000;

const app = express();

// serve extra js static file
app.use(express.static(join(import.meta.dirname, "public")))

app.get("/", (_, res) => {
  res.sendFile(join(import.meta.dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
