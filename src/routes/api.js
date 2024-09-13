import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.send({
    message: "wellcome",
    status: 200,
  });
});

router.use("/users");

export default router;
