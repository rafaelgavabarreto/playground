const Express = require('express');
const router = Express.Router();



router.get('/health', function(req, res, next) {
  return res.status(200).json({'msg':'Hello world!'});
});


module.exports = router;