const {Router} = require('express')
const {check} = require('express-validator')
const {
  getMedicos,
  crearMedicos,
  actualizarMedicos,
  borarMedicos
  
} = require('../controllers/medicos')
const {validarCampos} = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

router.get('/',getMedicos );
router.post('/',
      [
        validarJWT,
        check('nombre','el nombre es necesario').not().isEmpty(),
        check('hospital','el hospital id debe ser valido').isMongoId(),
        validarCampos
      ],
 crearMedicos );

router.put('/:id',
    [
      
  ],actualizarMedicos);

  router.delete('/:id',borarMedicos)
module.exports = router;