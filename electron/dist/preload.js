'use strict'

//AÑADIR CONTROLADORES
const user = require('./controller/user/user');
const type_product = require('./controller/type-product/type-product');
const client = require('./controller/client/client');
const type_shipping = require('./controller/type-shipping/type-shipping');
const product = require('./controller/product/product');
const packages = require('./controller/package/package');
/** PRELOAD FUNCTION
 * @Observations : Funciones que se ejecutan de manera automantica luego de la carga de la aplicacion
 */
const runController = ()=>{
  return{
    init : ()=>{
      user.init();
      type_product.init();
      client.init();
      type_shipping.init();
      product.init();
      packages.init();
    }
  }
}


module.exports = runController();


