const {query,insert,del} = require('../database')
class Users {
    async getUsers(){
        try{

            return await query("SELECT * FROM users")
        }
        catch(err){
            return {err}
        }
    }
    async insertUser(data){
        if(data.name && data.password && data.email){

            try{
                return await insert("users",data)
            }
            catch(err){
                return {err}
            }
        }
        return({Message:"Faltan Campos a Completar"})
    }

}

module.exports=Users