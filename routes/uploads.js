const {Router} = require('express');
const { fileUpload } = require('../controllers/uploads');
const expressfileUpload = require('express-fileupload');
const { validarJWT } = require('../middlewares/validar-jwt')
const router = Router();

router.use(expressfileUpload());
router.put('/:tipo/:id',validarJWT,fileUpload)

module.exports = router;