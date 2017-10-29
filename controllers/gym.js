const knex = require('../db/knex.js');

module.exports = {
  index: function(req, res) {
    knex('pokemon').then((result)=>{
      console.log(result)
   res.render('gym', {title: 'Express', pokemon: result});
 })
},
add: function(req, res){
  knex('pokemon')
  .where('id', req.params.id)
  .then((result)=>{
    console.log(result[0].name)
    let pokemonname = result[0].name
    req.session.deck.push(pokemonname);
    res.redirect('/gym')
  })
},
}
