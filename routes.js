const Controller = require("./controller.js");
const router = require("express").Router()
router.get('/user', Controller.findUsers);
router.post('/user', Controller.createUser);

module.exports = router;