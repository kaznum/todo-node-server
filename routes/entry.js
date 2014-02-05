exports.create = function(req, res){
  var Entry = global.db.Entry;
  var title = req.body.title;
  var details = req.body.details;
  Entry.create({
    title: title,
    details: details
  })
  .error(function(err){
    console.log(err);
  })
  .success(function(result){
    res.redirect('/');
  });
};
 
/*
 * DELETE entry
 */
 
exports.delete = function(req, res){
  var Entry = global.db.Entry;
  var id = req.params.id
  Entry.destroy({id: id})
    .error(function(err){
      console.log(err);
    })
    .success(function(result){
      res.redirect('/');
    });
};
