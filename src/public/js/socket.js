const socket = io();
const messageInput = document.getElementById("messageInput");
const sendMessageButton= document.getElementById("sendMessagesButton");
const messagesContainer= document.getElementById("messagesContainer");

sendMessageButton.addEventListener("click", () =>{
    const inputText = messageInput.value;
    socket.emit("message", inputText)
    messageInput.value= "";
})

/* socket.emit("message", "hola me estoy comunicando desde websocket") */

socket.on("evento_socket_ind", data =>{
    console.log(data)
})
socket.on("messages", (mensajes)=>{
    const mensajesHtml = mensajes.map((mensaje)=>{
        return `<p>${mensaje.socketId}: ${mensaje.mensaje}</p>`
    }).join("");
    messagesContainer.innerHTML = mensajesHtml;
})

socket.on("Evento_para_todos_menos_el_actual", data=>{
    console.log(data)
})
socket.on("evento_para_todos", data=>{
    console.log(data)
})