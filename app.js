import express from "express";
import path from "path";
const __dirname = path.resolve();
// console.log(__dirname);
const app = express();

const PORT = 8000;
// path.join(__dirname, "Public");
// serve static file form public directory
app.use(express.static(path.join(__dirname, "Public")));
// app.get("/", (req, res, next) => {
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/html/index.html");
});

app.get("/get-user", (req, res) => {
  res.json({
    fName: "Binaya",
    lName: "Moktan",
  });
});
//   console.log("We get the response"); 
//   res.send("<h1>hello server</h1>");
// });
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(` server is running at this port http://localhost:${PORT}`);
});
