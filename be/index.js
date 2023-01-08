const express = require("express");
const app = express();
require("dotenv").config();
// const process = require("process");
// var bodyParser = require("body-parser")11;
var fileUpload = require("express-fileupload");
var cors = require("cors");
var path = require('path');
// const minimist = require('minimist');
const { Web3Storage, getFilesFromPath, File } = require("web3.storage");

app.use(express.json());
app.use(cors());

app.use(fileUpload());

// const multer = require("multer");
// const storage = multer.memoryStorage(); // or use disk storage
// const upload = multer({ storage });

// app.post('/translate-audio', , async (req, res) => {
//   console.log(req.file);
// });

app.post("/upload-files", async (req, res) => {
  // const args = minimist(process.argv.slice(2));
  const token = process.env.WEB3_STORAGE_TOKEN;

  if (!token) {
    return console.error(
      "A token is needed. You can create one on https://web3.storage"
    );
  }
 
  // const fileName = await req.files.data.name;
  // const file = await req.files.data;
  // const uploadFile= await path.join(__dirname,'.','files',`${fileName}`);
  // await file.mv(uploadFile,(res)=>{
  //   console.log(res);
  // });

  console.log('REQ', req.files.data);

  // const bufferData = req.files.data.data

  const storage = new Web3Storage({ token });
  const files = [];
  // const file = new File([req.files.data], Date.now());
  // const pathFiles = await getFilesFromPath(uploadFile);
  // console.log('pathFiles: ', pathFiles);
  // await files.push(pathFiles);
  // console.log('files: ', files);
  // const files = req.files;    
  // console.log(`Uploading ${files.length} files`);
  // const cid = await storage.put([file]);
  // console.log("Content added with CID:", cid);
  res.send({ success: true, cid: cid });
});

app.listen(4000, () => {
  console.log("Server running on 4000!");
});
