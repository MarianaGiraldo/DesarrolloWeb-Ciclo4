const express = require('express');
const mongoose = require('mongoose');
const PersonaSchema = require("./modelos/Persona.js")

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//Conexión a base de datos
mongoose.connect("mongodb+srv://prog_web:ProgWebMisionTIC2022@clusterprogweb.kucv3.mongodb.net/ActividadesBD?retryWrites=true&w=majority")

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected')
})

db.on('error', err => {
  console.error('connection error:', err)
})

// Operaciones CRUD
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

router.get('/persona', (req, res) => {
    PersonaSchema.find(function(err, datos){
        if(err){
            console.log("Error leyendo las Personas");
        }else{
            res.send(datos);
        }
    })
})

router.post('/persona', (req, res) => {
    let nuevaPersona = new PersonaSchema({
        idPersona: req.body.id ,
        tipoDocumentoPersona: req.body.tipoDoc,
        documentoPersona: req.body.doc,
        nombresPersona: req.body.nombres,
        apellidosPersona: req.body.apellidos,
        direccionPersona: req.body.direccion,
        emailPersona: req.body.email,
        telFijoPersona: req.body.telFijo,
        telCelPersona: req.body.telCel,
        urlSitioWebPersona: req.body.urlSitioWeb,
        descPerfilPersona: req.body.descPerfil
    })
    nuevaPersona.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Persona almacenada correctamente")
    })
})

router.put('/persona/', (req, res) => {
    let personaUpdt =  PersonaSchema.findOneAndUpdate(
        {idPersona: req.body.id},
        {
            tipoDocumentoPersona: req.body.tipoDoc,
            documentoPersona: req.body.doc,
            nombresPersona: req.body.nombres,
            apellidosPersona: req.body.apellidos,
            direccionPersona: req.body.direccion,
            emailPersona: req.body.email, 
            telFijoPersona: req.body.telFijo,
            telCelPersona: req.body.telCel,
            urlSitioWebPersona: req.body.urlSitioWeb,
            descPerfilPersona: req.body.descPerfil
        }
        )
    
    // personaUpdt.tipoDocumentoPersona = req.body.tipoDoc,
    // personaUpdt.documentoPersona = req.body.doc,
    // personaUpdt.nombresPersona = req.body.nombres,
    // personaUpdt.apellidosPersona = req.body.apellidos,
    // personaUpdt.direccionPersona = req.body.direccion,
    // personaUpdt.emailPersona = req.body.email,
    // personaUpdt.telFijoPersona = req.body.telFijo,
    // personaUpdt.telCelPersona = req.body.telCel,
    // personaUpdt.urlSitioWebPersona = req.body.urlSitioWeb,
    // personaUpdt.descPerfilPersona = req.body.descPerfil
    
    // let doc =  personaUpdt.save(function(err, datos){
    //     if(err){
    //         console.log(err);
    //     }
    //     res.send("Persona almacenada correctamente")
    // })
})

router.delete('/persona/', (req, res) => {
    let personaDel =  PersonaSchema.findOne({idPersona: req.body.id})
   
    let doc =  personaDel.remove(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Persona eliminada correctamente")
    })
})

app.use(router);
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});
