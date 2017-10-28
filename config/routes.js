//Update the name of the controller below and rename the file.
const pokemon = require("../controllers/pokemon.js");
const trainers = require("../controllers/trainers.js");

module.exports = function(app){

  app.get('/', pokemon.index);

  app.get('/makepokemon', pokemon.form);

  app.post('/makepokemon', pokemon.create);

  app.get('/pokemon', pokemon.main);

  app.get('/pokemon/:id', pokemon.getOne);

  app.get('/edit/:id', pokemon.edit);

  // app.post('/edit/:id', pokemon.editOne);

  app.get('/trainers', trainers.main);



}
