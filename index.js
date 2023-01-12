import bodyParser from "body-parser";
import express from "express";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

//middleware
app.use(bodyParser.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("<h1><code>Home Page</code></h1>");
});

// listening
app.listen(PORT, () => {
  console.log(`Server running on port : http://localhost:${PORT}`);
});
