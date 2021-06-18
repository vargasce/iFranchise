import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Dispacher } from '../../../Core/controller/dispacher';
import { ProductModel } from '../../../Core/models/product.model';
import { ipcRender } from '../../../Core/services/ipcrender/ipcRender.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css'],
  providers:[ ipcRender, ElectronService, Dispacher ],
})
export class ProductNewComponent implements OnInit {

  public productModel : ProductModel;

  constructor(
    private _request : Dispacher,
  ) { }

  ngOnInit(): void {
  }


    /** EVENT PRODUCT CHILD
     * @observations evento necesario para el funcionamiento de Product-data
     * recibe la data del producto desde el componente.
     */
    eventProductChild( data : ProductModel){
        this.productModel = data;
        this.newProduct();
    }

    /** NEW PRODUCT
     *  @observations llamada a la API para settear nuevo producto
     */
    async newProduct(){
        try{
          let responseSucces = await this._request.postDB('new-product',this.productModel);
          console.log(`New record is success : ${responseSucces}`);
          // modal con success
        }catch( error ){
          console.log(`Error in add-record -> ${error}`);
          // modal con error en pantalla
        }
    }





}
