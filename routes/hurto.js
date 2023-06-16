const {Router} = require('express')

const route = Router()

const{ hurtoGet, hurtoPost, hurtoPut, hurtoDelete } = require('../controllers/hurto')

route.get('/hurto',hurtoGet)

route.post('/hurto',hurtoPost)

route.put('/hurto',hurtoPut)

route.delete('/hurto',hurtoDelete)

module.exports = route