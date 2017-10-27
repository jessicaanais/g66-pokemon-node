const knex = require('../db/knex.js');

module.exports = {
  index: function(req,res){
    res.redirect('/pokemon');
  },
  form: function(req, res){
    res.render('makepokemon')
  },
  main: function(req, res, next) {
    knex('pokemon').then((result)=>{
      console.log(result)
   res.render('pokemon', { title: 'Express', pokemon: result});
 })
 },
  create: function(req,res){
    knex('pokemon')
    .insert({
        name: req.body.name,
        trainer_id: req.body.trainer_id,
        cp: req.body.cp
      }, "*")
      .then((result)=>{
        console.log(result);
        res.redirect("/pokemon")
      })
      .catch((err) => {
        console.error(err)
      });
  }
};
