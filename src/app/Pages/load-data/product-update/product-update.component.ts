import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Dispacher } from '../../../Core/controller/dispacher';
import { ProductModel } from '../../../Core/models/product.model';
import { ipcRender } from '../../../Core/services/ipcrender/ipcRender.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
  providers:[ ipcRender, ElectronService, Dispacher ],
})
export class ProductUpdateComponent implements OnInit {

  public productModel : ProductModel;
  public id : number;

  constructor(
    private _request : Dispacher
  ) { }

  ngOnInit(): void {
      this.getProduct( this.id );
  }


    /** GET PRODUCT
     * @observations Obtencion de la DATA de un producto a partir de su cod_producto
     */  
    async getProduct( id : number){
          try{
            let responseSucces = await this._request.postDB('get-product',id)
            console.log(`get data succesfull : ${responseSucces}`);
            this.productModel = responseSucces;
            // modal con success
          }catch( error ){
            console.log(`Error in get data -> ${error}`);
            // modal con error en pantalla
          }
    }


    
    /** UPDATE PRODUCT
    * @observations llamada a la API para el Update de una tupla existente en la tabla Product
    */
    async updateProduct (){
      try{
        let responseSucces = await this._request.postDB('update-product', this.productModel);
        console.log(`Update is success : ${responseSucces}`);
        // modal con success
      }catch( error ){
        console.log(`Error in update-record -> ${error}`);
        // modal con error en pantalla
      }
    }



    /** UPDATE PRODUCT CHILD
     * @observations obtencion de la DATA contenida en el componente product-data
     */
    updateProductChild( data : ProductModel ){
        this.productModel = data;
        this.updateProduct();
    }

    

}




