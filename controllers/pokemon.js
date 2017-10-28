const knex = require('../db/knex.js');

module.exports = {
  index: function(req, res) {
    res.redirect('/pokemon');
  },
  form: function(req, res) {
    res.render('makepokemon')
  },
  main: function(req, res, next) {
    knex('pokemon').then((result) => {
      res.render('pokemon', {
        title: 'Express',
        pokemon: result
      });
    })
  },
  create: function(req, res) {
    knex('pokemon')
      .insert({
        name: req.body.name,
        trainer_id: req.body.trainer_id,
        cp: req.body.cp
      }, "*")
      .then((result) => {
        res.redirect("/pokemon")
      })
      .catch((err) => {
        console.error(err)
      });
  },
  getOne: function(req, res) {
    knex('pokemon')
    .where('id', req.params.id)
    .then((result) => {
      var pokemonid = result[0].trainer_id
    knex('trainers')
    .where('id', pokemonid)
    .then((results) => {
      console.log(results)
    res.render('pokemonprofile', {pokemon: result[0], trainer: results})
  })
  })
},
  edit: function(req, res){
    knex('pokemon')
    .where('id', req.params.id)
    .then((result) => {
      var pokemonid = result[0].trainer_id
    knex('trainers')
    .where('id', pokemonid)
    .then((results) => {
    knex('trainers')
    .then((trainerresult)=>{
    res.render('editpokemon', {pokemon: result[0], trainer: results, trainers: trainerresult})
    })
  })
  })
},
update: function(req, res){
  knex('pokemon')
    .where('id', req.params.id)
    .update(req.body, "*")
    .then((result)=>{
      console.log(result)

      res.redirect('/pokemon');
    })
    .catch((err) => {
      console.error(err)
    });
},
delete: function(req, res){

    knex('pokemon')
      .del()
      .where('id', req.params.id)
      .then(()=>{

        res.redirect('/pokemon');
      })
      .catch((err) => {
        console.error(err)
      });
  }

};
