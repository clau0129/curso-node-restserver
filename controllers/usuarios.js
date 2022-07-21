const {response} = require('express');


const usuariosGet= (req, res = response) => {

    //Para obtener los queryParams
    //const query = req.query;
    //También se puede desestructurar para mostrar solo lo que yo necesito
    const{q, nombre='No name', apikey} = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey
    })
};

const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;
    res.json({
        msg: 'post API - Controlador',
        nombre, 
        edad
    })
};

const usuariosPut = (req, res) => {
    //Para obtener el parámetro que se pasa en la url
    //const id = req.params.id;
    const {id} = req.params;
    res.json({
        msg: 'put API - Controlador',
        id : id
    })
};

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - Controlador' 
    })
};

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controlador' 
    })
};
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
