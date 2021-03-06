const express = require('express');
const router = express.Router();
const paymentController = require('../app/controllers/PaymentController')

router.get('/test', paymentController.test);
router.post('/momo', paymentController.momo);

router.post('/vnpay', paymentController.vnpay);
router.get('/result', paymentController.result);


module.exports = router;