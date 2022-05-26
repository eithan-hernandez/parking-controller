let helperPath = "../helpers";
const Query = require(`${helperPath}/query`);





const comunidadUnamCheck = async (data)=>{
console.log(data)
    let cuenta = data.cuenta
    

    let strQuery = `SELECT * FROM comunidad_unam WHERE cuenta=${cuenta}`
    let resQuery = await Query(strQuery)
    console.log(resQuery)
    return   resQuery  

}

module.exports ={
    comunidadUnamCheck
}