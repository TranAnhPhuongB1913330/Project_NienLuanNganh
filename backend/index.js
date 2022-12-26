const express = require("express");
const env = require("./config/envConfig");
const cors = require("cors");
const connect = require("./config/db");
const userRouter = require("./routes/userRouter");
const categoryRouter = require("./routes/categoryRouter");
const app = express();

// connect db
connect();
// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
    res.json({msg: 'Welcome to eCommerce'});
})

app.use('/api', userRouter);
app.use('/api', categoryRouter);

const port = env.PORT || 5000;

app.listen(port, () => {
    console.log("Server running....")
})