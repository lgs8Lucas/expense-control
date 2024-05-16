const router = require('../routers');
const connection = require('../database/connection')
const tables = require('../database/tables')

module.exports = (app, express) =>{
    tables.init(connection);
    router(app, express);
}