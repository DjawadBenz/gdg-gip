const express = require("express");
const app = express();

const reportRoute = require('./routes/reportRoute');
const connectDB =require('./config/db');




app.use(express.json());

const port = 4736;
connectDB();

app.use("/api/reports", reportRoute);


app.listen(port, () => {
    console.log(`the server is running on the port ${port}`);
});

