let helperPath = "../helpers";
const Query = require(`${helperPath}/query`);





const getPlaces = async (data)=>{

    let strQuery = `SELECT * FROM cajon`
    let resQuery = await Query(strQuery)
    return resQuery  
}

const AssignPlace = async (data)=>{

    let id_usuario = data.id_usuario 
    let cuenta = data.cuenta
    let estado = 1

    let strCajon = `SELECT id_cajon FROM usuario_cajon WHERE id_usuario=${id_usuario}` 
    let resCajon = await Query(strCajon)
    let id_cajon = resCajon[0]


    let strQuery = `UPDATE cajon SET estado=${estado} WHERE id_cajon=${id_cajon}`
    let resQuery = await Query(strQuery)
    return   resQuery  
}


const releasePlace = async (data) =>{
    let id_usuario = data.id_usuario 
    let cuenta = data.cuenta
    let estado = 0

    let strCajon = `SELECT id_cajon FROM usuario_cajon WHERE id_usuario=${id_usuario}` 
    let resCajon = await Query(strCajon)
    let id_cajon = resCajon[0]

    let strQuery = `UPDATE cajon SET estado=${estado} WHERE id_cajon=${id_cajon}`
    let resQuery = await Query(strQuery)

    let strDrop = `DELETE FROM  usuario_cajon WHERE id_cajon=${id_cajon}`
    let resDrop = await Query(strDrop)

    return   {error:false }       
}



module.exports ={
    getPlaces,
    AssignPlace,
    releasePlace
}