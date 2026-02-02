import express from "express";
import cors from 'cors'
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    next()
});
app.use(cors())
app.post("/", (req, res) => {
  res.send(`<pre>${JSON.stringify(req.body, null, 2)}</pre>`);
});
app.listen(3000, () => console.log("listening on port 3000"));
