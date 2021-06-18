import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ipcRender } from '../../../Core/services/ipcrender/ipcRender.service';
import { ElectronService } from 'ngx-electron';
import { Dispacher } from '../../../Core/controller/dispacher';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ ipcRender, ElectronService, Dispacher ]
})
export class ProductListComponent implements OnInit {

  // objetos para el funcionamiento del componente product-grid
  public table : any = {};
  public tableOptions = { 'edit' : true, 'delete' : true};
  public headersList = ['brand','description','id','id_type','name','photo','price_buy','price_sell','price_wholesale','product_code']


  constructor(
      private navigation : Router,
      private _ipcRender : ipcRender,
      private _request : Dispacher
  ) { }

  ngOnInit(): void {
      this.productList();
  }



    /** PRODUCT LIST
     * @observations llamada a la API para obtener las tuplas de la tabla Product
     */
    async productList(){

        //PRUEBA DE DISPACHER
        try{
          let _resultSet = await this._request.getDB('list-product');
          this.builGridData( _resultSet, this.headersList, this.tableOptions, null, null,null);
          console.table(_resultSet)
        }catch( error ){
          console.log(`Error in get list Dispacher : ${error}`);
        }

    }



    /** EDIT PRODUCT
     * @observations Evento NAVIGATE con el cual inicio el Update de un producto
     */
    editProduct( id : number){
        this.navigation.navigate(['/load-data/product-update/'+id]);
    }



    /** DELETE PRODUCT
     * @observations envio del id de producto a la API para el delete del mismo.
     * @param id
     */
    async deleteProduct( id : number){
      try{
        let responseSucces = await this._ipcRender.putandGet('delete-product', id );
        console.log(`Delete Succefull : ${responseSucces}`);
    }catch( error ){
        console.log(`Error in delete : ${error}`);
    }
    }


    /** BUILD GRID DATA
     * @observations Construyo el Objeto TABLE para enviar al componente product-grid
     */
    builGridData( data : any, headers = null, options = null, paginaActual = null , cantidadTuplas = null, totalPaginas = null){
      this.table = {
        'list' : data,
        'listHeaders' : headers,
        'options' : options,
        'actualPage' : paginaActual,
        'cantidadPaginas' : cantidadTuplas,
        'totalPaginas' : totalPaginas
      }

      console.log(this.table);
    }



}
