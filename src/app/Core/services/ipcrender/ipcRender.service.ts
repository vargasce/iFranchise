import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Request } from '../../interface/request';

@Injectable()
export class ipcRender implements Request {

    public resultData : any;
    public args :any;
    constructor(
        public _electronService : ElectronService,
    ){
    }

    /** PUT AND GET
     * @Observations llamada custom para los setters and getters de la db
     * @param path ruta a la cual se esta haciendo la consulta
     * @param data <any> , model o data a enviar a la API
     * @returns 
     */
    putandGet( path : string , data : any ):Promise<any>{        
        return new Promise( async ( resolve, reject ) =>{
            try{
                let response = await this._electronService.ipcRenderer.sendSync( path, data );
                resolve( response )
            }catch( error ){
                reject( error );
            }
        });
    }

    /**  GET LIST from DB
     * @Observations llamada custom para obtener listas de la db
     * @param path ruta a la cual se esta haciendo la consulta 
     * @returns <Object> retorna un objeto contenedor de la lista necesaria 
     */
    getList( path : string):Promise<any>{
        return new Promise( async ( resolve, reject ) =>{
            try{
                let response = await this._electronService.ipcRenderer.sendSync( path );
                resolve( response )
            }catch( error ){
                reject( error );
            }
        });
    }


    /**  GET METHOD
     * @Observations llamada custom para obtener listas de la db
     * @param resources ruta a la cual se esta haciendo la consulta 
     * @returns  Promise<any> : Retorna new promise, await data base
     */
    GET( resources : string = ''):Promise<any>{
        return new Promise( async ( resolve, reject ) =>{
            try{
                let response = await this._electronService.ipcRenderer.sendSync( resources );
                resolve( response )
            }catch( error ){
                reject( error );
            }
        });
    }

    /** POST METHOD
     * @Observations llamada custom para los setters and getters de la db
     * @param resources ruta a la cual se esta haciendo la consulta
     * @param data <any> , model o data a enviar a la API
     * @returns Promise<any> : Retorna new promise , await data base
     */
    POST( resources : string = '', data : any = {} ):Promise<any>{
        return new Promise( async ( resolve, reject ) =>{
            try{
                let response = await this._electronService.ipcRenderer.sendSync( resources, data );
                resolve( response )
            }catch( error ){
                reject( error );
            }
        });
    }


}
