import express from "express";
import path from "path";
const __dirname = path.resolve();
// console.log(__dirname);
const app = express();

const PORT = 8000;
// path.join(__dirname, "Public");
// serve static file form public directory
app.use(express.static(path.join(__dirname, "Public")));
app.use(express.urlencoded({ extended: true }));
// app.get("/", (req, res, next) => {

// home path controller
app.get("/", (req, res) => {
  console.log("i got response from home");
  res.sendFile(__dirname + "/src/html/index.html");
});

// User interface controller
app.get("/register", (req, res) => {
  console.log(req.query);
  console.log("i got response from register");
  res.sendFile(__dirname + "/src/html/register.html");
});
app.post("/register", (req, res) => {
  console.log(req.body);
  console.log("i got response from register");
  res.sendFile(__dirname + "/src/html/register.html");
});
// User login controller
app.get("/login", (req, res) => {
  console.log("i got a response from login ");
  res.sendFile(__dirname + "/src/html/login.html");
});
// app.get("/get-user", (req, res) => {
//   res.json({
//     fName: "Binaya",
//     lName: "Moktan",
//   });
// });
//   console.log("We get the response");
//   res.send("<h1>hello server</h1>");
// });
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(` server is running at this port http://localhost:${PORT}`);
});
