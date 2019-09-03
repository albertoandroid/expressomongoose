const jwt = require('jsonwebtoken')

function auth(req, res, next){
    const jwtToken = req.header('Authorization')
    if(!jwtToken) return res.status(401).send('Acceso Denegado. Necesitamos un token valido')

    try{
        const payload = jwt.verify(jwtToken, process.env.SECRET_KEY_JWT_CAR_API)
        req.user = payload
        next()
    }catch(e){
        res.status(400).send('Acceso Denegado. Token no valido')
    }
}

module.exports = auth