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
    async getNotasUser(id){
        try{

            return await query("SELECT * FROM notasdb WHERE idUser = "+id)
        }
        catch(err){
            return {err}
        }
    }

    async insertNotas(data){
        if(data.nota && data.expiracion && data.titulo && data.idUser){

            try{
                return await insert("notasdb",data)
            }
            catch(err){
                return {err}
            }
        }
        return({Message:"Faltan Campos a Completar"})
    }

}

module.exports=Notas