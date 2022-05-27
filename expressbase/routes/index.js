var express = require('express');
const { fstat } = require('fs');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  fs.readFile('./public/json/libros.json', (error, datos) => {
    if (error) {
      res.write ('error de lectura')
    } else {
      res.render('index', { datos: JSON.parse(datos)} );
    }
  })
});

module.exports = router;
