const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Hello express_js!</h1>');// send() allow us to send well a response
});

module.exports = router;