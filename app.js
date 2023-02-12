require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/routes");
const cors = require('cors');
const PORT = process.env.PORT || 3000;


//Enabeling body-parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());
 
app.use("/genAd",router);
app.listen(PORT,()=>{
    console.log(`server starter at ${PORT}`);
});