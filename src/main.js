import express from "express";

const app = express();

try {
    baseDeDatos.authenticate() 
    console.log('coneccion fue exitosa')
 } catch (error) {
     console.log(error)
 }

 app.listen(3100, () => {
    console.log('Servidor corriendo en el puerto 3100')
    console.log('http://localhost:3100')
})