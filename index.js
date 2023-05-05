import express from "express";
import PizzaService from "./PizzaService.js";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get('/', async(req, res) => {
    res.send("Pizza API");
})

app.get('/pizza', async (req, res) => {
    let r = await PizzaService.get_all();
    res.send(r.recordset);
})

app.get('/pizza/:id', async(req, res) => {
    try {
        let r = await PizzaService.get_by_id(req.params.id);
        res.status(200).send(r.recordset);
    } catch (error) {
        console.log(error);
        res.send("error");
    }
})

app.use(bodyParser.json())
app.post('/pizza', async(req, res) => {
    try {
        let r = await PizzaService.insert(req.body);
        res.status(200).send("Pizza creada");
    } catch (error) {
        console.log(error)
        res.send("error");
    }
})

app.put('/pizza', async(req, res) => {
    try {
        let r = await PizzaService.update(req.body);
        res.status(200).send("Pizza actualizada");
    } catch (error) {
        console.log(error)
        res.send("error");
    }
})

app.delete('/pizza/:id', async(req, res) => {
    try {
        let r = await PizzaService.delete_by_id(req.params.id);
        res.status(200).send("Pizza eliminada");
    } catch (error) {
        res.send("error")
    }
})

app.listen(port, () => {
    console.log("listen");
})
