const {query,insert,del} = require('../database')
class Notas {
    async getNotas(){
        try{

            return await query("SELECT * FROM notasdb")
        }
        catch(err){
            return {err}
        }
    }
}

module.exports=Notas