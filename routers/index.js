const expensesRoutes = require('./expensesRoute');
module.exports = (app, express) =>{
    app.use(express.json());//Para ler json
    app.use(express.urlencoded({extended:true}));
    app.use(expensesRoutes);
}