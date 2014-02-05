
/*
 * GET home page.
 */

exports.index = function(req, res){
  var Entry = global.db.Entry;
  Entry.findAll({order: 'id DESC'})
    .error(function(err){
       console.log(err);
    })
    .success(function(results){
      res.render('index', { title: 'Entries' , entries: results});
    });
};

