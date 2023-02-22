const http = require("http");
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.set('view engine',"ejs")
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended:true}));
let datos = [{
    matricula: "2020020309",
    nombre: "ACOSTA ORTEGA JESUS HUMBERTO",
    sexo: "M",
    materias: ["InglÃ©s", " TecnologÃ­a 1", " Base de Datos"]
},
{
    matricula: "2020020301",
    nombre: "ACOSTA VARELA IRVING GUADALUPE",
    sexo: "M",
    materias: ["InglÃ©s", " TecnologÃ­a 1", " Base de Datos"]
},
{
    matricula: "2020020399",
    nombre: "ALMOGAR VAZQUEZ YARLEN DE JESUS",
    sexo: "F",
    materias: ["InglÃ©s", " TecnologÃ­a 1", " Base de Datos"]
},
{
    matricula: "2020030224",
    nombre: "CHAVEZ ORTIZ LUIS GUILLERMO",
    sexo: "M",
    materias: ["Mantenimiento de equipo de cÃ³mputo", " Polimorfismo extremo", " AnÃ¡lisis de datos"]
},
{
    matricula: "2022030228",
    nombre: "VEGA HERNANDEZ FRANCISCO",
    sexo: "M",
    materias: ["Mantenimiento de equipo de cÃ³mputo", " Polimorfismo extremo", " AnÃ¡lisis de datos"]
},
{
    matricula: "2020030223",
    nombre: "JIMENEZ TOSTADO JESUS DE ISRAEL",
    sexo: "M",
    materias: ["Redes", " Desarrollo web", " ProgramaciÃ³n orientada a objetos"]
}]

app.get('/',(req,res)=>{
    // res.send("<h1>Iniciamos con express</h1>");
    res.render('index',{titulo:"Listado de alumnos", listado:datos})
})

app.get("/tablas",(req,res)=>{
    const valores = {
        tabla:req.query.tabla
    }
    res.render('tablas', valores);
})

app.post("/tablas",(req,res)=>{
    const valores = {
        tabla:req.body.tabla
    }
    res.render('tablas', valores);
})

app.get("/cotizacion",(req,res)=>{
    const valores = {
        valor:req.query.valor,
        pInicial:req.query.pInicial,
        plazos:req.query.plazos
    }
    res.render('cotizacion', valores);
})

app.post("/cotizacion",(req,res)=>{
    const valores = {
        valor:req.body.valor,
        pInicial:req.body.pInicial,
        plazos:req.body.plazos
    }
    res.render('cotizacion', valores);
})

app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + '/public/error.html')
})

// Escuchar el servidor por el puerto 3000
app.listen(process.env.PORT || 3000,()=>{
    console.log("Iniciado puerto 3000")
});