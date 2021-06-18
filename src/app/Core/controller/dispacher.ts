import { Injectable } from '@angular/core';
import { Request } from '../interface/request';
import { ipcRender } from '../services/ipcrender/ipcRender.service';
import { ElectronService } from 'ngx-electron';

@Injectable()
export class Dispacher {

  /**
   * INVOKE METHOD WITH "GETRUN OR POSTRUN", IMPLEMENTS INTERFACE "Request"
   */

  private _ipcRenderer : ElectronService;

  constructor(
  ){
    this._ipcRenderer = new ElectronService();
  }
    
    public getDB( resources : string ):Promise<any>{
      let _services = new ipcRender( this._ipcRenderer );  
      return this.getRun( _services , resources);
    }

  public postDB( resources : string, data : any ):Promise<any>{
    let _services = new ipcRender( this._ipcRenderer );
    return this.postRun( _services, resources, data );
  }

  private getRun( req : Request, resources : string  ):Promise<any>{
    return req.GET( resources );
  }

  private postRun( req : Request, resources : string, data : any ):Promise<any>{
    return req.POST( resources, data );
  }

}

