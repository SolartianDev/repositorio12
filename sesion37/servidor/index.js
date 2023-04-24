const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

//conexion con la BD
mongoose
  .connect(
    "mongodb+srv://SolartianDev:1234ab@solartiandev.4gn3fdl.mongodb.net/empresa?retryWrites=true&w=majority"
  )

  .then(function (db) {
    console.log("conectado a la base de datos");
  })
  .catch(function (err) {
    console.log(err);
  });

//configuracion
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.resolve("../cliente/")));

//rutas
//modelo de datos
const Contacto = require("./models/contacto");
const Cliente = require("./models/cliente");
//sitio web principal
app.get("/", function (req, res) {
  res.sendFile(path.resolve("../cliente/index"));
});

//listado de datos de la empresa contacto
app.get("/contacto", function (req, res) {
  res.sendFile(path.resolve("../cliente/tabla_contacto"));
});
//listado de datos de la empresa cliente
app.get("/cliente", function (req, res) {
  res.sendFile(path.resolve("../cliente/tabla_cliente"));
});
//listado de formulario contacto
app.get("/contacto", function (req, res) {
  res.sendFile(path.resolve("../cliente/formulario_contacto"));
});
//listado de formulario cliente
app.get("/cliente", function (req, res) {
  res.sendFile(path.resolve("../cliente/formulario_cliente"));
});

// Se Guarda cliente en la Base de datos
app.post("/cliente", async function (req, res) {
  try {
    let cliente = new Cliente({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      pais: req.body.pais,
      email: req.body.email,
      telefono: req.body.telefono,
      empresa: req.body.empresa,
      fecha: req.body.fecha,
    });
    await cliente.save();
    res.send("Cliente guardado correctamente en la base de datos");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error guardando cliente en la base de datos");
  }
});

// Se Guarda contacto en la Base de datos
app.post("/contacto", async function (req, res) {
  let datos_Contacto = req.body;
  let nuevo_Contacto = new Contacto(datos_Contacto);
  await nuevo_Contacto.save();
  res.send("Contacto regristrado");
  console.log(nuevo_Contacto);
});

///ruta pedir clientes de la base de datos
app.get("/clientesdb", async function (req, res) {
  let clientedocuments = await Cliente.find();
  console.log(clientedocuments);
  res.send(clientedocuments);
});


app.post("/buscarcliente", async function (req, res) {
  try {
    // Busca tanto el cliente como los contactos
    let [clientes, contactos] = await Promise.all([
      Cliente.find({ nombre: req.body.nombre, apellido: req.body.apellido }),
      Contacto.find({ cliente: req.body.cliente }),
    ]);
    // Envía ambos resultados en un objeto JSON
    res.json({ clientes: clientes, contactos: contactos });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error recuperando clientes de la base de datos");
  }
});

  /* app.post('contactodb', async function (req, res){
  let name = req.body.exists;
  console.log(name)
  let data = await CustomElementRegistry.findOne({$or: [{nombre: nombre},{apellido: apellido}]})
  console.log(data)
  if(data != null){
    res.send(data);
  }
  else{
    data = false
    res.send(data)
  }
});
 */

  // Agrega la ruta para buscar los datos de un cliente
  /* app.post('/buscarcliente', async function (req, res){
  let nombre = req.body.nombre;
  let apellido = req.body.apellido;
  console.log(nombre, apellido);
  let data = await CustomElementRegistry.findOne({nombre: nombre, apellido: apellido});
  console.log(data);
  if(data != null){
    res.send(data);
  }
  else{
    res.send(false);
  }
});
 */

  /* //ruta pedir clientes de la base de datos
app.get('/contactodb', async function(req, res){
  let contactodocuments = await Cliente.find();
  console.log(contactodocuments);
  res.send(contactodocuments);
}) */

  //puerto y escucha del servidor
  app.listen(5000, function () {
    console.log("______________________________");
    console.log("servidor funcionando correctamente");
  })

