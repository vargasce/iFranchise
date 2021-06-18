'use strict'

const fetchNode = require('node-fetch-npm');

class Tracking {

   private URL : string = 'https://api.trackingmore.com';
   private API_KEY : string = 'ca0fb758-80c2-4c7e-bd4a-f1313e436f35';
   private METHOD : string;
   private HEADERS = {
      'Conten-Type' : 'application/json',
      'Trackingmore-Api-Key' : this.API_KEY
   };

   constructor( url : string  = null, key : string = null, method : string = null){
      this.URL = url ? url : this.URL;
      this.API_KEY = key ? key : this.API_KEY;
      this.METHOD = method ? method : 'v2';
   }

   /** EXIST CONECTION
    * @Observation : Verificamo si tenemos conexion con el servidor, 
    * porlo que tambien verificamos si tenemos acceso a internet.
    * return result : Promise => promesa, retorba petucion al WS.
    */
   public isConnection():Promise<any>{
      return new Promise(  async( resolve, reject ) =>{
         let options = {
            method: 'GET',
            headers: this.HEADERS
         };

         try{
            let response = await fetchNode( this.URL, options );
            let data = response.json();
            resolve( data );
         }catch( error ){
            reject( error );
         }
      });
   }

   /** GET 
    * @Observation : metodo de peticion de get
    * @param fn : string => Función de la peticion.
    * @return result : Promise => promesa, retorna peticion del WS ( web services )
    */
   public get( fn : string = null ):Promise<any>{
      return new Promise( async ( resolve, reject ) =>{
         if( fn ){
            let _url = `${this.URL}/${this.METHOD}/${fn}`;
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

   /** POST
    * @Observation : metodo de peticion post.
    * @param fn : string => funcion de la peticion.
    * @param body : Object => datos a enviar.
    * @return result : Promise => promesa, retorna preticion del WS ( web services )
    */
   public post( fn : string = null, body : {} = {} ):Promise<any>{
      return new Promise( async  ( resolve, reject ) =>{
         if( fn ){
            let _url = `${this.URL}/${this.METHOD}/${fn}`;
            let _options = {
               method : 'POST',
               headers : this.HEADERS,
               body : body
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
