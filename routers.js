const routers = require('express').Router()
const conn = require('./config/conn')

//pegando a tabela transfers do banco de dados db_banco
routers.get('/', (req, res) => {
    console.log("Chegay")
    let sql = 'select * from tb_transfers'
    conn.query(sql, (err, rows, fields) => {
        if(err)throw err
        res.send(rows)
    })
})

//CRIANDO O CRUD

//pegando a id/Read
routers.get('/:id', async (req, res) => {
    const {id} = req.params
    let sql = 'select * from tb_transfers where id_transfer = ?'
    conn.query(sql, [id], (err, rows, fields) => {
        if(err) throw err;
        res.json(rows[0])
    })
})

//deletar/Delete
routers.delete('/:id', (req, res) => {
    const {id} = req.params
    let sql = `delete from tb_transfers where id_transfer = '${id}'`
    conn.query(sql, (err, rows, fields) => {
        if(err) throw err
        res.json({status: 'Transferência excluída com sucesso.'})
    })
})

//inserir/Create
routers.post('/', (req, res) => {
    const {nome, valor, agencia, conta, digito} = req.body
    let sql = `insert into tb_transfers(nome, valor, agencia, conta, digito) values('${nome}', '${valor}', '${agencia}', '${conta}', '${digito}')`
    conn.query(sql, (err, rows, fields) => {
        if(err) throw err
        res.json({status: 'Transferência criada com sucesso.'})
    }) 
})

//atualizar/Update
routers.put('/:id', (req, res) => {
    const {id} = req.params
    const {nome, valor, agencia, conta, digito} = req.body
    let sql = `update tb_transfers set nome = '${nome}', valor = '${valor}', agencia = '${agencia}', conta = '${conta}', digito = '${digito}' where id_transfer = '${id}'`
    conn.query(sql, (err, rows, fields) => {
        if(err) throw err
        res.json({status: 'Transferência atualizada com sucesso.'})
    })
})

module.exports = routers