const express = require('express')

const app = express()

//http://localhost:3000/login?user=luis&password=123

app.get('/login', (req, res) =>{
    const {user, password} = req.query
    if(!user || !password){
        res.status(400).json({msg: 'you need to provide <user> and <password> parameter'})
        return
    }
    if(user == 'luis' && password == '123'){
        res.json({msg: 'iniciastes sesion con exito'})
        return
    }
    res.status(400).json({msg: 'error en el usuario o contraseña'})
})

//http://localhost:3000/
app.get('/nombre', (request, response) =>{
    const params = req.params
    res.json({params})
})

app.post('/', (request, response) =>{
    response.json("Hello GET!")
})

app.get('/', (request, response) =>{
    response.json("Hello PUT")
})

app.patch('/', (request, response) =>{
    response.json("Hello PATCH")
})

app.delete('/', (request, response) =>{
    response.json("Hello DELETE")
})




app.listen(3000,() => {console.log("listening on port 3000")})