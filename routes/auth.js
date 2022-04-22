// path:
// /api/login

const {Router} = require('express')
const { check} = require( 'express-validator')
const router = Router();
const {login, googleSignIn} = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
router.post('/',
  [
    check('email','El email es obligatorio').isEmail(),
    check('password','El password es obligatorio').not().isEmpty(),
    validarCampos
  ],
  login
  )

  router.post('/google',
  [
    check('token','El tokende google es obligatorio').not().isEmpty(),
    validarCampos
  ],
  googleSignIn
  )
module.exports = router;