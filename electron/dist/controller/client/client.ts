import { ipcMain } from 'electron';
import * as path from 'path';
const __filePath = path.join( __dirname, '../../connectDB/connectDB' );
const con = require( __filePath );
var db : any = null;

const run = ()=>{
  return{
    init : ()=>{

      ipcMain.on('list-client', async function( event : any ){
        try{
          event.returnValue = await listClient();
        }catch( error ){
          console.log(`Error in list clietn : ${error}`);
        }
        db.close();
      });

      ipcMain.on('get-client', async function( event : any, ...args : any[] ){
        try{
          event.returnValue = await getClient( args[0] );
        }catch( error ){
          console.log(`Error in get clietn : ${error}`);
        }
        db.close();
      });

      ipcMain.on('update-client', async function( event : any, ...args : any[] ){
        try{
          event.returnValue = await updateClient( args[0].id, args );
        }catch( error ){
          console.log(`Error in get clietn : ${error}`);
        }
        db.close();
      });

      ipcMain.on('delete-client', async function( event : any, ...args : any[] ){
        try{
          event.returnValue = await deleteClient( args[0] );
        }catch( error ){
          console.log(`Error in get clietn : ${error}`);
        }
        db.close();
      });

      ipcMain.on('add-client', async function( event : any, ...args : any[] ){
        try{
          event.returnValue = await addClient( args );
        }catch( error ){
          console.log(`Error in get clietn : ${error}`);
        }
        db.close();
      });

    }
  }
}

module.exports = run();

/** UPDATE CLIENT 
 * @Observations : Obtener datos update de cliente.
 * @returns result : Promise => promesa, success update cliente.
 */
const updateClient = ( id_client : string, data : any[] ) =>{
  return new Promise(  async (resolve, reject) =>{
    try{
      let sql = `UPDATE client SET name = '${data[0].name}', last_name = '${data[0].last_name}', direction = '${data[0].direction}', city = '${data[0].city}',
                                   mail = '${data[0].mail}', phone = '${data[0].phone}', potential = ${data[0].potential}, provincia = '${data[0].provincia}' WHERE id = ${id_client}`;
      let _db = await connect();
      _db.serialize( () =>{
        _db.run( sql, ( error : any, result : any ) =>{
          if( !error ){
            resolve( result );
          }else{
            reject( error );
          }
        });
      });
    }catch( error ){
      console.log(`Error in update client : ${error}`);
    }
  });
}

/** DELETE CLIENT 
 * @Observations : Delete datos de cliente.
 * @returns result : Promise => promesa, success delete cliente.
 */
const deleteClient = ( id_client : any )=>{
  return new Promise( async ( resolve, reject ) =>{
    try{
      let sql = `DELETE client WHERE id = ${id_client}`;
      let _db = await connect();
      _db.serialize( () =>{
        _db.run( sql, ( error : any, result : any ) =>{
          if( !error ){
            resolve( result );
          }else{
            reject( error );
          }
        });
      });
    }catch( error ){
      console.log(`Error in delete cliente : ${error}`);
    }
  });
}

/** ADD CLIENT 
 * @Observations : Añadir datos de cliente.
 * @returns result : Promise => promesa, success add cliente.
 */
const addClient = ( data : any[] ) =>{
  return new Promise( async ( resolve, reject ) =>{
    try{
      let sql = `INSERT INTO client (name, last_name, direction, city, mail, phone, potential, provincia ) VALUES( 
                                    '${data[0].name}', '${data[0].last_name}', '${data[0].direction}', '${data[0].city}', '${data[0].phone}', ${data[0].potential}, '${data[0].provincia}' );`;
      let _db = await connect();
      _db.serialize( () =>{
        _db.run( sql, ( error : any, result : any ) =>{
          if( !error ){
            resolve( result );
          }else{
            reject( error );
          }
        })
      })
    }catch( error ){
      console.log(`Error in Add client : ${error}`);
    }
  });
}

/** LIST CLIENT 
 * @Observations : Obtener datos lista de cliente.
 * @returns result : Promise => promesa, success lista cliente.
 */
const listClient = ()=>{
  return new Promise( async (resolve, reject) =>{
    try{
      let sql = 'SELECT * FROM client;';
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
      console.log(`Error in await connect 'listClient' : ${error}`);
    }
  })
}

/** GET CLIENT 
 * @Observations : Obtener dato de cliente.
 * @returns result : Promise => promesa, success obtener cliente.
 */
const getClient = ( id_client : string )=>{
  return new Promise( async (resolve, reject) =>{
    try{
      let sql = `SELECT * FROM client WHERE id = ${id_client}`;
      let _db = await connect();
      _db.serialize( ()=>{
        _db.run( sql, ( error : any, result : any ) =>{
          if( !error ){
            resolve( result );
          }else{
            reject( error );
          }
        });
      });
    }catch( error ){
      console.log(`Error in getClient : ${error}`);
    }
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

