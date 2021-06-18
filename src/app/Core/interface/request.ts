
/** INTERFACE REQUEST
 * @Observations : Interface para realizar request,cada service de tipo solicitud
 * se debe de implementar con Request y correr en el dispacher de controladores
 * @implements get():Promise<any> => Solicitar datos get( Protocolo HTTP simulator )
 * @implements post():Promise<any> => Añadir, actualizar, solicitar post( Protocolo HTTP simulator )
 */ 
export interface Request {
  GET( path : string ):Promise<any>;
  POST( path : string, data : any ):Promise<any>;
}
