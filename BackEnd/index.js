const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const app = express();
require("dotenv").config();

const cors = require("cors");
const productController = require("./controller/product");

app.use(express.json());
//middleware
// const auth = (req,res,next)=>{
//   console.log("authenticating");
//   if(req.query.token==="12345"){
//     next();
//   }else{
//   res.status(401).json({message:"unauthorized"});
//   }
// }
//morgan middleware

// app.use(morgan("dev"));
// app.use(morgan("default"));



//db connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//static middleware
app.use(express.static("dist"));
app.use(cors());
app.get("/products", productController.getProducts);

//Create or POST API for products

app.post("/products", productController.createProduct);

//read or GET API for products by id

app.get("/products/:id", productController.getProductById);

//update or PUT API for products by id

app.put("/products/:id", productController.updateProductById);

//patch API for products by id

app.patch("/products/:id", productController.patchProductByid);

//delete API for products by id

app.delete("/products/:id", productController.deleteProductById);

//Crud operations

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/index.html");
  // res.send("hello");
  res.json({ type: "GET" });
});

app.post("/", (req, res) => {
  // res.sendFile(__dirname + "/index.html");
  // res.send("hello");
  res.json({ type: "POST" });
});

app.put("/", (req, res) => {
  // res.sendFile(__dirname + "/index.html");
  // res.send("hello");
  res.json({ type: "PUT" });
});

app.delete("/", (req, res) => {
  // res.sendFile(__dirname + "/index.html");
  // res.send("hello");
  res.json({ type: "DELETE" });
});

app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname ,"dist","index.html"))
});
app.listen(process.env.PORT || 8080, () => {
  console.log("server started");
});

// const index = fs.readFileSync("index.html", "utf-8");
// const data = fs.readFileSync("data.json", "utf-8");
// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   console.log("server started");
//
//  switch(req.url){
//     case "/" :  res.setHeader("Content-Type", "text/html");
//                 res.end(index); break;

//     case "/data" :  res.setHeader("Content-Type", "application/json");
//                     res.end(data); break;
//     default :   res.writeHead(404);
//                 res.end(); break;
//   }
// });
