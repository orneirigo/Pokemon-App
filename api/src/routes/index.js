const { Router } = require('express');
const pokemon = require('./pokemonRoute')
const type = require('./typeRoute')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const router = Router();

router.use('/pokemons', pokemon)
router.use('/types', type)

module.exports = router;
