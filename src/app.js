import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routers/views.router.js";
import { Server } from "socket.io";

const app = express();

/* urlencoded es para que pueda trabajar con los datos que ingresan por formulario */
app.use(express.urlencoded({ extended: true }))

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/public", express.static(__dirname + "/public"));

app.use("/", viewsRouter);

const mensajes = [];

const server = app.listen(8080, () =>
    console.log("Server running in port 8080")
);
const socketServer = new Server(server);

socketServer.on("connection", socket => {
    console.log("nuevo cliente conectado")

    socket.on("message", data => {
        /*         console.log(data) */
        mensajes.push({socketId: socket.id, mensaje: data});
        socketServer.emit("message", data);
        socketServer.emit("messages", mensajes)
    })

    socket.emit("messages", mensajes)


    socket.emit("evento_socket_ind", "solo lo debe recibir el socket actual")

    socket.broadcast.emit("Evento_para_todos_menos_el_actual", "se conecto otro cliente")
    socketServer.emit("evento_para_todos", "este evento es para todos")
})