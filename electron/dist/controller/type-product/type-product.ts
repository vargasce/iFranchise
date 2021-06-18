import { ipcMain } from 'electron';
import * as path from 'path';
const __filePath = path.join( __dirname, '../../connectDB/connectDB.js' );
const con = require( __filePath );
var db : any = null;


const run = ()=>{
   return {
      init : ()=>{

         ipcMain.on('list-type-product', async ( event : any ) =>{
            try{
               event.returnValue = await listTypeProduct();
            }catch( error ){
               console.log(`Error in listTypeProduct : ${error}`);
            }
         });

         ipcMain.on('add-type-product', async ( event : any, ...args : Array<any> ) =>{
            try{
               event.returnValue = await addTypeProduct( args );
            }catch( error ){
               console.log(`Error in addTypeProduct : ${error}`);
            }
            db.close();
         });

         ipcMain.on('get-type-product', async ( event : any, ...args : Array<any> ) =>{
            try{
               event.returnValue = await getTypeProduct( args );
            }catch( error ){
               console.log(`Error in getTypeProduct : ${error}`);
            }
            db.close();
         });

         ipcMain.on('delete-type-product', async ( event : any, ...args : Array<any> ) =>{
            try{
               event.returnValue = await deleteTypeProduct( args );
            }catch( error ){
               console.log(`Error in deleteTypeProduct : ${error}`);
            }
            db.close();
         });
      }
   }
}

module.exports = run();

/** LIST TYPE PRODUCT
 * @Observations : Listar typo de producto.
 * @returns result : Promise => promesa, consulta a la base de datos.
 */
const listTypeProduct = ()=>{
   return new Promise( async ( resolve, reject ) =>{
      let sql = 'SELECT * FROM type_product;';
      let _db = await connect();
      _db.serialize( ()=>{
         _db.all( sql, ( error : any, result : any ) =>{
            if( !error ){
               resolve(result);
            }else{
               reject(error);
            }
         });
      });
   });
}



/** ADD TYPE PRODUCT
 * @Observations : Añadir typo de producto.
 * @returns result : Promise => promesa, consulta a la base de datos.
 */
const addTypeProduct = ( data : any[] )=>{
   return new Promise( async (resolve, reject) =>{
      let sql = `INSERT INTO type_product (description) VALUES ('${data[0]}')`;
      let _db = await connect();
      _db.serialize( () =>{
         _db.run( sql, ( error : any ) =>{
            if( !error ){
               resolve('Row Insert.');
            }else{
               reject( error );
            }
         });
      });
   });
}


/** GET TYPE PRODUCT
 * @Observations : Obtener typo de producto.
 * @returns result : Promise => promesa, consulta a la base de datos.
 */
const getTypeProduct = ( data : any[] )=>{
   return new Promise( async (resolve, reject) =>{
      let sql = `SELECT * FROM type_product WHERE id = ${data[0]}`;
      let _db = await connect();
      _db.serialize( ()=>{
         _db.each( sql, ( error : any, result : any ) =>{
            if( !error ){
               resolve(result);
            }else{
               reject( error );
            }
         });
      });
   });
}


/** DELETE TYPE PRODUCT
 * @Observations : Eliminar typo de producto.
 * @returns result : Promise => promesa, consulta a la base de datos.
 */
const deleteTypeProduct = ( data : any[] )=>{
   return new Promise( async (resolve, reject) =>{
      let sql = `DELETE FROM type_product WHERE id = ${data[0]}`;
      let _db = await connect();
      _db.serialize( () =>{
         _db.run( sql, ( error : any ) =>{
            if( !error ){
               resolve('Row Delete.');
            }else{
               reject( error );
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
