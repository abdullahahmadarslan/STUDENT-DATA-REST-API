//packages
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// imports
app.use(express.json());
const router = require("./routings/routings");
require("./db/connection");



// middlewares
app.use(router);


// 
app.listen(port, () => {
    console.log(`server listening successfully on port:${port}`);
});
