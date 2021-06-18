import { ipcMain } from 'electron';
import * as path from 'path';
const __filePath = path.join( __dirname, '../../connectDB/connectDB' );
const con = require( __filePath );
var db : any = null;

const run = ()=>{
  return {
    init : ()=>{

      ipcMain.on('list-user', async function( event : any ){
        try{
          event.returnValue = await listUser();
        }catch( error ){
          console.log(`Error in listUser : ${error}`);
        }
        db.close();
      });

      ipcMain.on('add-user', async function( event : any, ...args : any[] ){
        try{
          event.returnValue = await addUser( args );
        }catch( error ){
          console.log(`Error in addUser : ${error}`);
        }
        db.close();
      });

      ipcMain.on('delete-user', async function( event : any, ...args : any[] ){
        try{
          event.returnValue = await delUser( args );
        }catch( error ){
          console.log(`Error in delUser : ${error}`);
        }
        db.close();
      });

      ipcMain.on('get-user', async function( event : any, ...args : any[] ){
        try{
          event.returnValue = await getUser( args );
        }catch( error ){
          console.log(`Error in getUser : ${error}`)
        }
        db.close();
      });

      ipcMain.on('update-user', async function( event : any, ...args : any[] ){
        try{
          event.returnValue = await UpdateUser( args );
        }catch( error ){
          console.log(`Error in UpdateUser : ${error}`);
        }
        db.close();
      });

    }
  }
}
module.exports = run();


/** GET USER LIST
 * @Observations : function que retorna lista de usuarios 
 * cargados en el sistema.
 * @returns result : Promise => promesa, consulta a la base de datos.
 */
const listUser = () =>{
  return new Promise( async(resolve, reject) =>{
    try{
      let sql = 'SELECT * FROM user;';
      let _db = await connect();
      _db.serialize( () =>{
        _db.each( sql, ( error : any, result : any ) =>{
          if( !error ){
            resolve( result );
          }else{
            reject( error );
          }
        });
      });
    }catch( error ){
      console.log(`Error in await connect 'listUser' : ${error}`);
    }
  });
}

/** ADD USER
 * @Observations : Añadir datos de usuario a la base de datos.
 * @returns reult : Promise => promesa, success carga de datos;
 */
const addUser = ( data: any[] ) =>{
  return new Promise( async (resolve, reject) =>{
    let sql = `INSERT INTO user(name, last_name, user, email ) VALUES ('${data[0][0]}', '${data[0][1]}', '${data[0][2]}', '${data[0][3]}');`;
    console.log(sql);
    let _db = await connect();
    _db.serialize( () =>{
      _db.run( sql, (error: any) =>{
        if( !error ){
          resolve(`Rows insert`);
        }else{
          reject(error);
        }
      }); 
    });
  });
}

/** UPDATE USER
 * @Observations : Actualizamos usuario.
 * @returns result : promise => promesa, retorna success.
 */
const UpdateUser = ( data : any[] ) =>{
  return new Promise( async (resolve : any, reject : any) =>{
    let sql = `UPDATE user SET name = '${data[0][0]}' , last_name = '${data[0][1]}' , user = '${data[0][2]}' , email = '${data[0][3]}' WHERE id = ${data[0][4]} ;`;
    let _db = await connect();
    _db.serialize( () =>{
      _db.run( sql, (error : any) =>{
        if( !error ){
          resolve(`Rows update`);
        }else{
          reject(error);
        }
      });
    });
  });
}

/** GET USER
 * @Observations : Obtener dato de usuario.
 * @returns result : Promise => promesa, success obtener usuario.
 */
const getUser = ( data : any[] ) =>{
  return new Promise( async (resolve, reject) =>{
    let sql = `SELECT * FROM user WHERE id = ${data[0][0]} ;`;
    let _db = await connect();
    _db.serialize( () =>{
      _db.each( sql, (error : any, result : any) =>{
        if( !error ){
          resolve(result);
        }else{
          reject(error);
        }
      });
    });
  });
}


/** DELETE USER
 * @Observations : Dejar inacivo al usuario
 * @returns result : Promise => promesa, success delete user
 */
const delUser = ( data : any[] ) =>{
  return new Promise( (resolve, reject) =>{
    resolve("");
  });
}

/** CONECTION / CLOSE DB 
 * @Observations : Functions para instancia a db y
 * close de la conexion
 */
const connect = ():any=>{
  return new Promise( (resolve, reject) =>{
    db = con.conectionDB.getInstance();
    if( db ){
      resolve( db );
    }else{
      reject( undefined );
    }
  });
}


