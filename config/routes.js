//Update the name of the controller below and rename the file.
const pokemon = require("../controllers/pokemon.js");
const trainers = require("../controllers/trainers.js");
const gym = require("../controllers/gym.js");

module.exports = function(app){

  app.get('/', pokemon.index);

  app.get('/makepokemon', pokemon.form);

  app.post('/makepokemon', pokemon.create);

  app.get('/pokemon', pokemon.main);

  app.get('/pokemon/:id', pokemon.getOne);

  app.get('/edit/:id', pokemon.edit);

  app.post('/update/:id', pokemon.update);

  app.get('/delete/:id', pokemon.delete);

  app.get('/trainers', trainers.main);

  app.get('/trainer/:id', trainers.getOne);

  app.get('/gym', gym.index);

  app.get('/gym/battle', gym.battle)

  // app.get('/pokemon/add/:id', gym.add);



}
