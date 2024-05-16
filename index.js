const express = require('express');
const app = express();
const {port} = require('./config/variablesConfig')
const appConfig = require('./config/appConfig')

appConfig(app, express)


app.use(express.static('.'))
app.use(express.static('./frontend/pages'))
app.use(express.static('./frontend'))


app.listen(port, er =>{
    if(er){
        console.log(er.message);
        return;
    }
    console.log("Backend rodando...");
    console.log("http://localhost:"+port);
})