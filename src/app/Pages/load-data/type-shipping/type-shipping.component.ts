import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Dispacher } from '../../../Core/controller/dispacher';
import { ipcRender } from '../../../Core/services/ipcrender/ipcRender.service';

@Component({
  selector: 'app-type-shipping',
  templateUrl: './type-shipping.component.html',
  styleUrls: ['./type-shipping.component.css'],
  providers : [ipcRender, ElectronService, Dispacher],
})
export class TypeShippingComponent implements OnInit {

  public shippingModel : any;

  constructor(
    private _request : Dispacher,
  ) { }

  ngOnInit(): void {

  }

    /** NEW TYPE 
     *  @observations llamada a la API para settear nuevo tipo de envio
     */
    async newType(){
        try {
            let responseSucces = await this._request.postDB('add-type-shipping', this.shippingModel);
            console.log(`New record is succes : ${responseSucces}`);
        } catch (error) {
            console.log(`Error in add-record -> ${error}`);
        }    
    }
    /** LIST TYPE
     * @observations Consulta a la DB type_shipping para traerme todas las tuplas contenidas
     */
     async listType(){
      try{
          let responseSucces = await this._request.getDB('list-type-product');
          console.table(responseSucces)           
      }catch( error ){
          console.log(`Error in get-list -> ${error}`);
      }
    }

    /** DELETE TYPE
     * @observations envio del id de tipo de envio a la API para el delete del mismo.
     * @param id
     */
     async deleteType(id : number){
      try{
        let responseSucces = await this._request.postDB('delete-type-product',id);
        console.log(`Delete is success : ${responseSucces}`);
        // modal con success
      }catch( error ){
        console.log(`Error in del-record -> ${error}`);
        // modal con error en pantalla
      }
    }

    

}
