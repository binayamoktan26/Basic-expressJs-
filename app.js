import express from "express";
import path from "path";
import fs from "fs";
import { makeHtmlString } from "./src/fileMerger.js";
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

  // read the text base file

  fs.readFile(fileName, "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return res.sendFile(__dirname + "/src/html/index.html");
    } else {
      return res.send(makeHtmlString(data.split("\n")));
    }
  });

  //
});

// User interface controller
app.get("/register", (req, res) => {
  console.log(req.query);
  console.log("i got response from register");
  res.sendFile(__dirname + "/src/html/register.html");
});
const fileName = "userList.csv";
app.post("/register", (req, res) => {
  // console.log(req.body);
  const { name, email, password } = req.body;
  const str = `${name},${email},${password}\n`;
  console.log(str);
  console.log("i got response from register");

  // create file and write data
  // fs.writeFile(fileName, str, (error) => {
  //   error ? console.log(error) : console.log("file has been written");
  // }); it create only one data

  fs.appendFile(fileName, str, (error) => {
    error
      ? res.send(error.message)
      : //     : res.send(`<h1 class="alert alert-success text-center">

        //   User has been created , you may Login now
        // </h1>;`);
        res.redirect("/");
  });

  res.sendFile(__dirname + "/src/html/register.html");
});
// User login controller
app.get("/login", (req, res) => {
  console.log("i got a response from login ");
  return res.sendFile(__dirname + "/src/html/login.html");
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
