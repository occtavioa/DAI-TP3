import dbconfig from "./dbconfig.js"
import sql from "mssql"

const conexion = await sql.connect(dbconfig);

class PizzaService {
    static get_all = async () => {
        const r = await conexion.query("SELECT * FROM Pizzas");
        return r;
    }
    static get_by_id = async (id) => {
        const r = await conexion.request()
            .input("pId", id)
            .query("SELECT * FROM Pizzas WHERE Id=@pId")
        return r;
    }
    static insert = async(pizza) => {
        const r = await conexion.request()
            .input("pNombre", pizza.Nombre).input("pLibreGluten", pizza.LibreGluten).input("pImporte", pizza.Importe).input("pDescripcion", pizza.Descripcion)
            .query("INSERT INTO Pizzas VALUES (@pNombre, @pLibreGluten, @pImporte, @pDescripcion)");
        return r;
    }
    static update = async (pizza) => {
        const r = await conexion.request()
            .input("pId", pizza.Id).input("pNombre", pizza.Nombre).input("pLibreGluten", pizza.LibreGluten).input("pImporte", pizza.Importe).input("pDescripcion", pizza.Descripcion)
            .query("UPDATE Pizzas SET Nombre=@pNombre, LibreGluten=@pLibreGluten, Importe=@pImporte, Descripcion=@pDescripcion WHERE Id=@pId");
        return r;
    }
    static delete_by_id = async(id) => {
        const r = await conexion.request()
            .input("pId", id)
            .query("DELETE FROM Pizzas WHERE Id=@pId");
        return r;
    }
}

export default PizzaService;
