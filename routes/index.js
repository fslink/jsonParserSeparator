var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

.get('/exe', function(req, res, next) {

    fs.readFile(path.join('D:', 'spotinfo', 'T_ent.json'), {'encoding': 'utf-8'}, (err, data) => {
      if (err) throw err;
      var re = /},/gi;
      var nouvChn = data.replace(re, '}');
      fs.appendFile(path.join('D:', 'spotinfo', 'new_T_ent.json'), nouvChn, function (err) {
          if (err) throw err;
          console.log('Saved! ma gueule');
      }); 

    });

    res.send('OK');
})

module.exports = router;
