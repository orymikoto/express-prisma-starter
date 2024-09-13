import express from "express";
import userRoute from "./users.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.send({
    message: "wellcome",
    status: 200,
  });
});

router.use("/users", userRoute);

export default router;
