const Connection = require('../config/db')


function queryOld(consulta) {
    return new Promise(function (resolve, reject) {
        Connection.mysqlPool.query(`${consulta}`, (error, results, files) => {
            if (error) reject(error);
            resolve(results);
        });
    })
}

const query = (consulta)=>{

    return new Promise(function (resolve, reject) {


        Connection.mysqlPool.getConnection(function(err, connection) {
    if (err) {
        console.log("no connected")
        console.log(err.message)
        reject(err); // not connected!
    }
    console.log("hola")
  
    // Use the connection
    connection.query(`${consulta}`, (error, results, files) => {
        if (error) reject(error);
        resolve(results);
        connection.release()
    });
  });


    })
}



module.exports = query