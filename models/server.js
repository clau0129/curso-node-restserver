const express = require('express');
const cors = require('cors');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares función que siempre va a ejecutarse cuando se levante el servidor
        this.middlewares();

        //rutas de la aplicación
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        //Para los servicios como post o put que trae información en el body
        this.app.use(express.json());

        //Directorio público
        //use es la palabra clave para definir un middleware
        this.app.use(express.static('public'));
    }

    routes(){
        //Middleware condicional
       this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, () => {
        console.log(`Example app listening on port ${this.port}`)
        });
    }

   
}

module.exports = Server;