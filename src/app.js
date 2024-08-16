import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";

import boardRouter from "./modules/posts/post.router.js";
import {BoardData} from "./db.js";

dotenv.config();
BoardData.initialize();

const app = express();
app.set("port", process.env.PORT || 6000);

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use('/api/boards', boardRouter);

app.use ((err, req, res, next) => {
  res.status(500).send({})
})

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
