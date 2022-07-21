const{Router} = require('express'); //desestructuración de express
const{usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch} = require('../controllers/usuarios');

const router = Router(); //a router se le van a configurar todas las rutas

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);


module.exports = router;