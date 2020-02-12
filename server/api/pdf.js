const router = require("express").Router();
const printPDF = require("../utils/generatePDF");

router.post("/", async (req, res, next) => {
  const pdf = await printPDF(req.body.details);
  res.set({ "Content-Type": "application/pdf", "Content-Length": pdf.length });
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.send(pdf);
});

module.exports = router;
