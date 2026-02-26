import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
  const { token } = req.body;

  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET,
          response: token,
        },
      }
    );

    res.json({ success: response.data.success });
  } catch (err) {
    res.status(500).json({ error: "Verification failed" });
  }
});

export default router;
