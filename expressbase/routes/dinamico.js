var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('informacion dinamica');
});

router.get('/:datoURL', (req,res)=>{
  res.send('informacion dinamica: '+ req.params.datoURL);
})

module.exports = router;
