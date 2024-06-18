import app from "./index.js";
import mongoose from "mongoose";
import birthdayJob from "./cron/cronJob.js";

const port = process.env.PORT;
const uri = process.env.DATABASEURI;

mongoose
  .connect(uri, {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
  })
  .then(() => {
    console.log("MongoDB connected");
    birthdayJob.start();
    app.listen(port, () => {
      console.log(`server started on port: ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
