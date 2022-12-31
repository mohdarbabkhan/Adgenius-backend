require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/routes");
const PORT = process.env.PORT || 3000;


//Enabeling body-parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors({
    origin: 'https://adgenius.netlify.app',
    optionsSuccessStatus: 200
  }));
 
app.use("/genAd",router);
app.listen(PORT,()=>{
    console.log(`server starter at ${PORT}`);
});