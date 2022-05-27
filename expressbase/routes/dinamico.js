var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('dinamico');
});

router.get('/:datoURL/:ID', (req,res)=>{
  res.render('dinamico', {
    datos: {
      titulo : req.params.datoURL,
      ID: req.params.ID,
    }
  });
  //res.send('informacion dinamica: '+ req.params.datoURL);
})

module.exports = router;
