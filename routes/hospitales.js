// ruta 
// '/api/hospitales'
/*
ruta : /api/usuarios
*/

const {Router} = require('express')
const {check} = require('express-validator')
const {
  getHospitales,
  crearHospital,
  actualizarHospital,
  borarHospital
} = require('../controllers/hospitales')
const {validarCampos} = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

router.get('/',getHospitales );
router.post('/',
      [
        
      ],
 crearHospital );

router.put('/:id',
    [
      
  ],actualizarHospital);

  router.delete('/:id',borarHospital)
module.exports = router;