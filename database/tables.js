class Tables{
    init(connection){
        this.connection = connection;
        this.createTableExpenses();
    }

    createTableExpenses(){
        const sql = `CREATE TABLE IF NOT EXISTS expenses(
            id_expense INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            date_expense DATE NOT NULL,
            resum_expense varchar(100) NOT NULL,
            detailed_expense varchar(500),
            value_expense float NOT NULL  
        );`;
        this.connection.query(sql, er =>{
            if(er){
                console.log("Error when creating expenses table");
                //console.log(er.message);
                return;
            }
            console.log("Expenses table OK");
        })
    }
}

module.exports = new Tables();