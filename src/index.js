const express = require("express");
const app = express();
let port = process.env.PORT || 3001;
const route = require("./routes");
const cors = require('cors')

app.use(cors());
app.use(express.json());
route(app);

app.listen(port, () =>{
    console.log(`Example app is listening on port http://localhost:${port}`);
})