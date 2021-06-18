
const fetchNode = require('node-fetch-npm');

class Tracking {

   private URL : string = 'https://api.correoargentino.com.ar/backendappcorreo/api/api/';
   private API_KEY : string = '';
   private METHOD : string = 'shipping-tracking-';
   private HEADERS = {
      'Conten-Type' : 'application/json',
   };

   constructor( url : string  = null, key : string = null, method : string = null){
      this.URL = url ? url : this.URL;
      this.API_KEY = key ? key : this.API_KEY;
      this.METHOD = method ? method : this.METHOD;
   }

 /** GET RESULT
  * @Observations : Obtenemos solicitud del servidor de correo argentino.
  * @param fn : string => funcion de la peticion ( ml, ec, int-nac, NacP, Nac, Int )
  * @returns response : Promise => promesa, retorna respuesta de api COOREO ARGENTINO.
  */ 
  public getRequestCA( fn : string = '', id_pedido : string ):Promise<any>{
   return new Promise( async ( resolve, reject ) =>{
      if( fn ){
         let _url = `${this.URL}${this.METHOD}${fn}?number_shipping=${id_pedido}`;
         let _options = {
            method: 'GET',
            headers: this.HEADERS
         };
         
         try{
            let _response = await fetchNode( _url, _options );
            let _data = _response.json();
            resolve( _data );
         }catch( error ){
            reject( error );
         }
      }else{
         reject(`Not function`);
      }
   });
 }
}

module.exports = Tracking;
