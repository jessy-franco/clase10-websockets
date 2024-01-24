import express from "express";

const router = express.Router();


/* para probar usuarios al azar con esos contenidos */
const users = [
    {
        name: "Pepe",
        last_name: "Martinez",
        age: 18,
        email: "pepemartinez@gmail.com",
        tel: "0303456",
        rol:"admin"
    },
    {
        name: "Ana",
        last_name: "Gomez",
        age: 25,
        email: "anagomez@gmail.com",
        tel: "0123456",
        rol:"admin"
    },
    {
        name: "Carlos",
        last_name: "López",
        age: 30,
        email: "carloslopez@gmail.com",
        tel: "0789123",
        rol:"admin"
    },
    {
        name: "Laura",
        last_name: "Fernández",
        age: 22,
        email: "laurafernandez@gmail.com",
        tel: "0456789",
        rol:"user",
    },
    {
        name: "Javier",
        last_name: "Rodriguez",
        age: 28,
        email: "javierrodriguez@gmail.com",
        tel: "0567890",
        rol:"user",
    },
]; 
/* para probar funcionalidad con if y each */

const food = [
    {
        name:"Burga",
        price: "10,000"
    },
    {
        name:"Asado",
        price: "20,000"
    },
    {
        name:"Empanadas",
        price: "15,000"
    },
    {
        name:"Pizza",
        price: "18,000"
    },
    {
        name:"Sobras de comida",
        price: "5,000"
    },
]

router.get("/", (req, res) => {
    const indice = Math.floor(Math.random() * users.length);

    res.render("index",{
        user:users[indice],
        style:"index.css",
        isAdmin: users[indice].rol === "admin", food,
    });
});

router.get("/register", (req, res)=> {
    console.log(users)
    res.render("register")
})

router.post("/user", (req, res)=>{
    const {name, email, password}= req.body;
    users.push({name, email, password});
    console.log(users)
    res.render('register', { registroExitoso: true})
})

router.get("/socket", (req, res)=>{
    res.render("socket")
})

export default router;