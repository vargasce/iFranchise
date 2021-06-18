'use strict'
import { ipcMain } from 'electron';
import * as path from 'path';
const __filePath = path.join( __dirname, '../../connectDB/connectDB' );
const con = require( __filePath );
var db : any = null;

const run = () =>{
  return {
    init : () =>{
      ipcMain.on('list-product', async function( event : any ){
        try{
          event.returnValue = await listProduct();
        }catch( error ){
          console.log(`Error in list product : ${error}`);
        }
      });

      ipcMain.on('get-product', async function( event : any, ...args : any[] ){
        try{
          event.returnValue = await getProduct( args[0] );
        }catch( error ){
          console.log(`Error in get product : ${error}`);
        }
        db.close();
      });

      ipcMain.on('update-product', async function( event : any, ...args : any[] ){
        try{
          event.returnValue = await updateProduct( args[0].id, args );
        }catch( error ){
          console.log(`Error in update product : ${error}`);
        }
        db.close();
      });

      ipcMain.on('delete-product', async function( event : any, ...args : any[] ){
        try{
          event.returnValue = await deleteProduct( args[0] );
        }catch( error ){
          console.log(`Error in delete product : ${error}`);
        }
        db.close();
      });

      ipcMain.on('add-product', async function( event : any, ...args : any[] ){
        try{
          event.returnValue = await addProduct( args );
        }catch( error ){
          console.log(`Error in add product : ${error}`);
        }
        db.close();
      });

    }
  }
}



module.exports = run();

/** UPDATE PRODUCT 
 * @Observations : Update de producto.
 * @returns result : Promise => promesa, success update producto.
 */
const updateProduct = ( id_product : string, data : any[] ) =>{
  return new Promise(  async (resolve, reject) =>{
    try{
      let sql = `UPDATE product SET type_product = ${data[0].type_product}, name = '${data[0].name}', brand = '${data[0].brand}', price_buy = ${data[0].price_buy},
                                   price_sell = ${data[0].price_sell}, price_wholesale = ${data[0].price_wholesale}, description = '${data[0].description}',
                                   product_code = '${data[0].product_code}', photo = '${data[0].photo}' 
                                   WHERE id = ${id_product}`;
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
      console.log(`Error in update product : ${error}`);
    }
  });
}

/** GET PRODUCT 
 * @Observations : Obtener datos de producto.
 * @returns result : Promise => promesa, success get producto.
 */
const getProduct = ( code_product : string ) =>{
  return new Promise(  async (resolve, reject) =>{
    try{
      let sql = `SELECT * FROM product WHERE product_code = '${code_product}'`;
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
      console.log(`Error in get product : ${error}`);
    }
  });
}

/** LIST PRODUCT 
 * @Observations : Lista de producto.
 * @returns result : Promise => promesa, success lista producto.
 */
const listProduct = () =>{
  return new Promise(  async (resolve, reject) =>{
    try{
      let sql = `SELECT * FROM product ;`;
      let _db = await connect();
      _db.serialize( () =>{
        _db.all( sql, ( error : any, result : any ) =>{
          if( !error ){
            resolve( result )
          }else{
            reject( error );
          }
        });
      });
    }catch( error ){
      console.log(`Error in list product : ${error}`);
    }
  });
}

/** DELETE PRODUCT 
 * @Observations : Eliminar datos delete de producto.
 * @returns result : Promise => promesa, success delete producto.
 */
const deleteProduct = ( data : any[] ) =>{
  return new Promise(  async (resolve, reject) =>{
    try{
      let sql = `DELETE product WHERE code_product = '${data[0].code_product}' ;`;
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
      console.log(`Error in delete product : ${error}`);
    }
  });
}


/** ADD PRODUCT 
 * @Observations : Añadir datos add de producto.
 * @returns result : Promise => promesa, success add producto.
 */
const addProduct = ( data : any[] ) =>{
  return new Promise(  async (resolve, reject) =>{
    try{
      let sql = `INSERT INTO product ( id_type, name, brand, price_buy, price_sell, price_wholesale, description, product_code, photo ) VALUES(
                                       ${data[0].id_type},
                                       '${data[0].name}',
                                       '${data[0].brand}',
                                       ${data[0].price_buy},
                                       ${data[0].price_sell},
                                       ${data[0].price_wholesale},
                                       '${data[0].description}',
                                       '${data[0].product_code}',
                                       '${data[0].photo}'
                );`;

      let _db = await connect();
      _db.serialize( () =>{
        console.log( sql )
        _db.run( sql, ( error : any, result : any ) =>{
          if( !error ){
            resolve( result );
          }else{
            reject( error );
          }
        });
      });
    }catch( error ){
      console.log(`Error in add product : ${error}`);
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

