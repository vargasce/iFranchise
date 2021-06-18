'use strict'

import { ipcMain } from 'electron';
import * as path from 'path';
const __filePath = path.join( __dirname, '../../connectDB/connectDB' );
const con = require( __filePath );
var db : any = null;

const run = ()=>{
  return {
    init : ()=>{

      ipcMain.on('list-type-shiping', async ( event : any ) =>{
        try{
          event.algo = await listTypeShipping();
        }catch( error  ){
          console.log(`Error in list type shipping : ${error}`);
        }   
      });


      ipcMain.on('add-type-shipping', async ( event : any, ...args : [] ) =>{
        try{
          event.returnValue = await addTypeShipping( args );        
        }catch( error ){
          console.log(`Error in add type shipping : ${error}`);
        }
      });

      ipcMain.on('delete-type-shipping', async ( event : any, ...args : [] ) =>{
        try{
          event.returnValue = await deleteTypeShipping( args );
        }catch( error ){
          console.log( `Error in delete shipping : ${error}` );
        }
      });

      ipcMain.on('update-type_shipping', async ( event : any, ...args : [] ) =>{
        try{
          event.returnValue = await updateTypeShipping( args );
        }catch( error ){
          console.log(`Error in update shipping : ${error}`);
        }
      });
    }
  }
}


module.exports = run();


/** UPDATE TYPE-SHIPPING 
 * @Observations : Update shipping.
 * @returns result : Promise => promesa, success update shipping.
 */
const updateTypeShipping = ( data : any[] ) =>{
  return new Promise(  async (resolve, reject) =>{
    try{
      let sql = `UPDATE type_shipping SET description = '${data[0].description} WHERE id = ${data[0].id}';`;
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
      console.log(`Error in update type shipping : ${error}`);
    }
  });
}


/** LIST TYPE-SHIPPING 
 * @Observations : Lista de shipping.
 * @returns result : Promise => promesa, success lista shipping.
 */
const listTypeShipping = () =>{
  return new Promise(  async (resolve, reject) =>{
    try{
      let sql = `SELECT * FROM type_shipping ;`;
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
      console.log(`Error in list type shipping : ${error}`);
    }
  });
}


/** LIST ADD-SHIPPING 
 * @Observations : Añadir de shipping.
 * @returns result : Promise => promesa, success add shipping.
 */
const addTypeShipping = ( data : any[]) =>{
  return new Promise(  async (resolve, reject) =>{
    try{
      let sql = `INSERT INTO type_shipping ( description ) VALUES( '${data[0].description}' );`;
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
      console.log(`Error in list type shipping : ${error}`);
    }
  });
}

/** LIST DELETE-SHIPPING 
 * @Observations : Eliminar shipping.
 * @returns result : Promise => promesa, success delete shipping.
 */
const deleteTypeShipping = ( data : any[]) =>{
  return new Promise(  async (resolve, reject) =>{
    try{
      let sql = `DELETE type_shipping WHERE id = ${data[0].id}`;
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
      console.log(`Error in delete type shipping : ${error}`);
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


