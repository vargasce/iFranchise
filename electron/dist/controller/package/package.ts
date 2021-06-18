
import { ipcMain } from 'electron';
import * as path from 'path';
const __filePath = path.join( __dirname, '../../connectDB/connectDB.js' );
const con = require( __filePath );
var db : any = null;

const run = ()=>{
  return {
    init : () =>{

      ipcMain.on('list-package', async ( event : any ) =>{
        try{
          event.returnValue = await listPackage();
        }catch( error ){
          console.log(`Error in list Package :; ${error}`);
        }
      });

      ipcMain.on('add-package', async ( event : any, ...args: any[] ) =>{
         try{
            event.returnValue = await addPackage( args );
         }catch( error ){
            console.log(`Error in add package : ${error}`);
         }
      });

      ipcMain.on('update-package', async ( event : any, ...args : any[] ) =>{
         try{
            event.returnValue = await updatePackage( args );
         }catch( error ){
            console.log(`Error in update package : ${error}`);
         }
      });


    }
  }
}


module.exports = run();

/** LIST PACKAGE
 * @Observations : Listar  de package.
 * @returns result : Promise => promesa, consulta a la base de datos.
 */
const listPackage = ()=>{
   return new Promise( async ( resolve, reject ) =>{
      let sql = 'SELECT * FROM package;';
      let _db = await connect();
      _db.serialize( ()=>{
         _db.each( sql, ( error : any, result : any ) =>{
            if( !error ){
               resolve(result);
            }else{
               reject(error);
            }
         });
      });
   });
}


/** ADD PACKAGE
 * @Observations : Añadir typo de package.
 * @returns result : Promise => promesa, consulta a la base de datos.
 */
const addPackage = ( data : any[] )=>{
   return new Promise( async ( resolve, reject ) =>{
      let sql = `INSERT INTO package ( id_sell, id_tracking, status, package_date, package_total ) 
                 VALUES( ${data[0].id_sell}, ${data[0].id_tracking}, '${data[0].status}', '${data[0].package_date}', '${data[0].package_total}' );`;

      let _db = await connect();
      _db.serialize( ()=>{
         _db.each( sql, ( error : any, result : any ) =>{
            if( !error ){
               resolve(result);
            }else{
               reject(error);
            }
         });
      });
   });
}


/** UPDATTTE PACKAGE
 * @Observations : Actualizar typo de package.
 * @returns result : Promise => promesa, consulta a la base de datos.
 */
const updatePackage = ( data : any[] )=>{
   return new Promise( async ( resolve, reject ) =>{
      let sql = `UPDATE package SET id_sell = ${data[0].id_sell}, id_tracking = ${data[0].id_tracking},
                                    status = '${data[0].status}', package_date = '${data[0].package_date}', 
                                    package_total = '${data[0].package_total}' )
                                 WHERE id = ${data[0].id};`;

      let _db = await connect();
      _db.serialize( ()=>{
         _db.each( sql, ( error : any, result : any ) =>{
            if( !error ){
               resolve(result);
            }else{
               reject(error);
            }
         });
      });
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

