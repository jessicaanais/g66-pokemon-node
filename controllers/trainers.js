const knex = require('../db/knex.js');

module.exports = {
  main: function(req, res, next) {
    knex('trainers').then((result)=>{
   res.render('trainers', {title: 'Express', trainers: result});
 })
 },
 getOne: function(req, res) {
   knex('trainers')
   .where('id', req.params.id)
   .then((result) => {
     console.log(result.name)
   res.render('trainerprofile', {trainer: result})

 })
}
}
