const expensesModel = require('../database/models/expensesModel')
class expensesController{
    search(req, res){
        const response = expensesModel.get()
        response
            .then(expenses => res.status(200).json(expenses))
            .catch(er => res.status(400).json(er.message))
    };

    insert(req, res){
        const expense = req.body;
        expensesModel.insert(expense)
            .then(msg => res.status(201).json(msg))
            .catch(er => res.status(400).json(er.message))
    };

    update(req, res){
        const { id } = req.params;
        const expense = req.body;
        expensesModel.update(expense, id)
            .then(msg => res.status(200).json(msg))
            .catch(er => res.status(400).json(er.message))
    };

    remove(req, res){
        const { id } = req.params;
        expensesModel.delete(id)
            .then(msg => res.status(200).json(msg))
            .catch(er => res.status(400).json(er.message))
    };
};

module.exports = new expensesController()