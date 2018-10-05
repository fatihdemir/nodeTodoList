var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   User.find(function(error, users) {
//     res.render('index', {
//       workList: users
//     });
//   });
// });
//
// router.get('/create', function(req, res, next){
//   res.render('create')
// });
//
// router.post('/create', function(req, res, next){
//   new User({
//     desc:req.body.issue,
//     status:"0"
//   }).save(function(error, comment){
//       res.redirect('/');
//     })
// });

module.exports = router;
