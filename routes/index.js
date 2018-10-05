var express = require('express');
var router = express.Router();
tanimlamalar = require('./../public/javascripts/momentDate')
var mongoose = require('mongoose');
var User = mongoose.model('User');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  var complatedTask = 0;
  var openedTask = 0;
  var sumTask = 0;
  User.find(function(error, users) {

    for (var i = 0; i < users.length; i++) {
      sumTask = sumTask + 1;
      if (users[i].status == "0") {
        openedTask = openedTask + 1;
      } else {
        complatedTask = complatedTask + 1;
      }
    }
    var taskPercent = (complatedTask / sumTask) * 100;
    taskPercent = Math.floor(taskPercent);
    res.render('index', {
      title: 'Todo App Liste Hoşgeldiniz',
      tarih: tanimlamalar.tarih,
      gun: tanimlamalar.gun,
      ay: tanimlamalar.ay,
      workList: users,
      taskPercent: taskPercent,
      moment: moment
    });
  });
});


router.get('/create', function(req, res, next) {
  res.render('create')
});

router.post('/create', function(req, res, next) {
  new User({
    desc: req.body.issue,
    startedDate: moment(req.body.startedDate, "DD.mm.YYYY").valueOf(req.body.startedDate),
    endDate: moment(req.body.endDate, "DD.mm.YYYY").valueOf(req.body.endDate),
    status: "0"
  }).save(function(error, comment) {
    if (error) throw error;
    res.redirect('/');
  })
});

router.get('/edit/:id', function(req, res, next) {
  User.findOne({
    _id: req.params.id
  }, function(err, users) {
    res.render('edit', {
      title: 'Todo App Düzenle',
      tarih: tanimlamalar.tarih,
      gun: tanimlamalar.gun,
      ay: tanimlamalar.ay,
      id: users.id,
      desc: users.desc,
      status: users.status,
      startedDate: moment(users.startedDate, "dd.mm.yy"),
      endDate: moment(users.endDate, "dd.mm.yy"),
      moment: moment
    });
  });

});


router.post('/edit/:id', function(req, res, next) {

  let content = {};
  content.desc = req.body.issue;
  content.status = req.body.status;
  content.startedDate = moment(req.body.startedDate, "DD.mm.YYYY").valueOf(req.body.startedDate);
  content.endDate = moment(req.body.endDate, "DD.mm.YYYY").valueOf(req.body.endDate);

  let query = {
    _id: req.params.id
  }
  User.update(query, content, function(err) {
    if (err) {
      console.log(err);
      return;
    } else {
      res.redirect('/');
    }
  });

});




router.get('/delete/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, function(error, next) {
    if (error) throw error;
    res.redirect('/');
  });
});

router.get('/update', function(req, res, next) {
  res.render('update')
});



router.get('/update/:id', function(req, res) {
  var id = req.params.id;
  User.findByIdAndUpdate({
    _id: id
  }, {
    status: "1"
  }, (error, data) => {
    if (error) {
      throw error;
    }
    res.redirect('/');
    $(".bitmis .todo-checkbox").attr("checked", "checked");
  });
});

module.exports = router;
