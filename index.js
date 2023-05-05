import express from "express";
import PizzaService from "./PizzaService.js";

const app = express();
const port = 3000;
let r = await PizzaService.delete_by_id(2);

app.get('/', async (req, res) => {
    res.send(r);
});

app.listen(port, () => {
    console.log("listen");
    console.log(r);
});
