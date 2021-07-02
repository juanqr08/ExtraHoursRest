const {Router} = require('express');
const { hoursGet, hoursPost, hoursGetRegister, hoursPutRegister, hoursDeleteRegister } = require('../controllers/hours');
const router = Router();

router.get('/' , hoursGet);
router.get('/:id' , hoursGetRegister);
router.put('/:id' , hoursPutRegister);
router.delete('/:id' , hoursDeleteRegister);
router.post('/' , hoursPost);

module.exports = router;