import mssql from "mssql"
import dbconfig from "./dbconfig.js"

const c = await mssql.connect(dbconfig);
const r = await c.query("SELECT * FROM Pizza");

async function get_all() {
    return r;
}

export default get_all;
