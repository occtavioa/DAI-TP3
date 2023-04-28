import express from "express";
import get_all from "./PizzaService.js";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    let all = get_all();
    res.send(all);
})

app.listen(port, () => {
    console.log("listen");
})
