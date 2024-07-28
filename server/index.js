const express = require("express");
const app = express();

app.use("/" , (req , res)=>{
    res.send("Server is running");
});

app.listen( "https://vercel-deployment-server-khaki.vercel.app/" || 5000 , console.log("Server started on PORT 5000"));