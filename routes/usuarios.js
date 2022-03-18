/*
ruta : /api/usuarios
*/

const {Router} = require('express')
const {getUsuarios,crearUsuario} = require('../controllers/usuario')
const {check} = require('express-validator')
const router = Router();

router.get('/', getUsuarios );
router.post('/',
      [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('password','La password es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
      ],
 crearUsuario );


module.exports = router;