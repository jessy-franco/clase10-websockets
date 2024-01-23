import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routers/views.router.js"

const app = express();

/* urlencoded es para que pueda trabajar con los datos que ingresan por formulario */
app.use(express.urlencoded({extended:true}))

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.use("/", viewsRouter)

const server = app.listen(8080, () =>
    console.log("Server running in port 8080")
);