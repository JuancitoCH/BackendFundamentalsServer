// sequalize 
// npm i mysql2
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'admin',
    password:'12345',
    database:'backendfundamentalsenenero'

})

const query = (sql,data)=>{

    return new Promise((resolve,reject)=>{
        connection.query(sql,data,function(error,result){
            if(error)reject(error.sqlMessage)
            else resolve(result)
        })
    })
}

const insert = async (tableName,data)=>{
    try{
        await query(`INSERT INTO ${tableName}(??) VALUES(?)`,[Object.keys(data),Object.values(data)])
        return {data,success:true}
    }catch(error){
        return {error,success:false}
    }
}
const del = async(tableName,id)=>{
    try{
        await query(`DELETE FROM ${tableName} WHERE id=?`,[id])
        return data
    }catch(error){
        return error
    }
}

module.exports = {query,insert,del}