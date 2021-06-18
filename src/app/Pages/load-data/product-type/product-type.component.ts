import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Dispacher } from '../../../Core/controller/dispacher';
import { ipcRender } from '../../../Core/services/ipcrender/ipcRender.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css'],
  providers:[ ipcRender, ElectronService, Dispacher ],
})
export class ProductTypeComponent implements OnInit {

  public typeModel : any;

  constructor(
    private _request : Dispacher,
  ) { }

  ngOnInit(): void {
      this.listType();
  }



    /** NEW TYPE 
     *  @observations llamada a la API para settear nuevo tipo de producto
     */
    async newType(){
        try{
            let responseSucces = await this._request.postDB('add-type-product',this.typeModel);
            console.log(`New record is success : ${responseSucces}`);
            // modal con success
        }catch( error ){
            console.log(`Error in add-record -> ${error}`);
            // modal con error en pantalla
        }
    }



    /** LIST TYPE
     * @observations Consulta a la DB type_product para traerme todas las tuplas contenidas
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
     * @observations envio del id de tipo producto a la API para el delete del mismo.
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
