const port = 3000
const urlSearch = 'http://localhost:' + port + '/expenses'

const tableContent = document.querySelector('#table-expenses-content');

const spanBalance = document.querySelector('#span-value-balance');
const spanOut = document.querySelector('#span-value-out');
const spanIn = document.querySelector('#span-value-in');

const modalAdd = document.querySelector('#modalAdd');
const openModalAdd = document.querySelector('#openModalAdd');
const btnResetAdd = document.querySelector('#btnResetAdd');
const formAdd = document.querySelector('#formAdd');

const main = document.getElementsByTagName('main')[0];
const header = document.getElementsByTagName('header')[0];

function toggleModalAdd(e) {    
    main.classList.toggle('blur')
    header.classList.toggle('blur')
    modalAdd.classList.toggle('invisible');
}




openModalAdd.addEventListener('click', toggleModalAdd);
btnResetAdd.addEventListener('click', toggleModalAdd);
document.formAdd.onsubmit = async e =>{
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const options = {
        method: form.method,
        body: new URLSearchParams(data)
    }

    fetch(urlSearch, options)
        .then(_=>{
            toggleModalAdd(_);
            attTable();
        })
        .catch(e => console.log(e))
    
}

function createRow(elements) {
    const tr = document.createElement('tr');
    elements.forEach(el => {
        const td = document.createElement('td');
        if (typeof(el) == 'object')
            td.appendChild(el);
        else
            td.innerHTML = el;
        tr.appendChild(td);
    });
    return tr;
}

function formatDate(dateUnf) {
    const [year, month, day] = dateUnf.replace("T03:00:00.000Z","").split('-')
    return `${day}/${month}/${year}`;
}

function formatValue(valueUnf) {
    return `R$ ${valueUnf.toFixed(2).toString().replace(".", ",")}`
}

function attTable() {
    tableContent.innerHTML = '';
    fetch(urlSearch)//Promisse que puxa a url
    .then(answ => answ.json())//promisse que pega o JSON
    .then(expenses => {//Pega array de objetos
        let out = 0;
        let iin = 0;
        expenses.forEach(el=>{
            let {date_expense, detailed_expense, id_expense, resum_expense, value_expense} = el

            const delEl = document.createElement('span');
            delEl.innerText = 'D';
            delEl.addEventListener('click', e=>{
                delElement(id_expense)
            })

            let fDate = formatDate(date_expense);
            let fValue = formatValue(value_expense);
            tableContent.appendChild(createRow([id_expense, resum_expense, fValue, fDate, "E", delEl]));

            if (value_expense > 0)
                iin += value_expense;
            else{
                out += value_expense;
            }

            spanBalance.innerText = formatValue(iin+out);
            spanIn.innerText = formatValue(iin);
            spanOut.innerText = formatValue(out);
        
        })

    })
}

function delElement(id) {
    const urlDel = 'http://localhost:' + port + '/expense/'+id
    fetch(urlDel, {method:'DELETE'})
        .then(alert("Registro apagado com Sucesso"))
        .catch(e =>{
            alert("Erro ao apagar registro");
            console.log(e);
        })
    attTable()
}

attTable()


