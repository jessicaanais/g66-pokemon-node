const knex = require('../db/knex.js');

module.exports = {
  main: function(req, res, next) {
    knex('trainers').then((result)=>{
      console.log(result)
   res.render('trainers', {title: 'Express', trainers: result});
 })
 },
}
