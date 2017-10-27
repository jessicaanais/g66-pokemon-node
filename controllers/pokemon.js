const knex = require('../db/knex.js');

module.exports = {
  index: function(req,res){
    res.redirect('/pokemon');
  },
  main: function(req, res, next) {
    knex('pokemon').then((result)=>{
      console.log(result)
   res.render('pokemon', { title: 'Express', pokemon: result});
 })
 },
};
