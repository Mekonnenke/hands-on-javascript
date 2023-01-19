const express = require('express');
const router = express.Router();

router.use(require('./customerRoutes'));
router.use(require('./dishRoutes'));
router.use(require('./guestRoutes'))
router.use(require('./tableRoutes'))


module.exports = router;

