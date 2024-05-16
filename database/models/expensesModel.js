const connection = require("../connection")
class expensesModel{
    runQuery(sql, params = ''){
        return new Promise((resolve, reject)=>{
            connection.query(sql, params, (er, res)=>{
                if(er) return reject(er);
                return resolve(res);
            })
        })
    };

    get(filter = '*'){
        const sql = `SELECT ${filter} FROM expenses`;
        return this.runQuery(sql)
    };

    insert(newExpense){
        const sql = 'INSERT INTO expenses SET ?'
        return this.runQuery(sql, newExpense);
    };

    update(updatedExpense, id){
        const sql = 'UPDATE expenses SET ? WHERE id_expense = ?'
        return this.runQuery(sql, [updatedExpense, id]);
    };

    delete(id){
        const sql = 'DELETE FROM expenses WHERE id_expense = ?'
        return this.runQuery(sql, id);
    };
}

module.exports = new expensesModel()