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
}

module.exports=Users