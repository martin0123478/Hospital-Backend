const {Router} = require('express')
const {
  getTodo, getDocumentosColleccion
} = require('../controllers/busquedas')
const { validarJWT } = require('../middlewares/validar-jwt')
const router = Router();


router.get('/:busqueda',validarJWT,getTodo)
router.get('/coleccion/:tabla/:busqueda',validarJWT,getDocumentosColleccion)

module.exports = router;