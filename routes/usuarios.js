/*
ruta : /api/usuarios
*/

const {Router} = require('express')
const {getUsuarios,crearUsuario,actualizarUsuario,deleteUsuarios} = require('../controllers/usuario')
const {check} = require('express-validator')

const {validarCampos} = require('../middlewares/validar-campos')
const router = Router();

router.get('/', getUsuarios );
router.post('/',
      [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('password','La password es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        validarCampos,
      ],
 crearUsuario );

router.put('/:id',
    [
      check('nombre','El nombre es obligatorio').not().isEmpty(),
      check('email','El email es obligatorio').isEmail(),
      check('role','El rol es obligatorio').isEmail(),
      validarCampos
  ],actualizarUsuario);

  router.delete('/:id',deleteUsuarios)
module.exports = router;