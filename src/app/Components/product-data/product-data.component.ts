import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { ProductModel } from '../../Core/models/product.model';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent implements OnInit {

    /** PRODUCT DATA COMPONENT
     * @observations Componente utilizado para agregar/actualizar tuplas en la tabla Product de la DB 
     */

  public productModel : ProductModel;

  @ViewChild('id_type') id_type : ElementRef;
  @ViewChild('name') name : ElementRef;
  @ViewChild('brand') brand : ElementRef;
  @ViewChild('price_buy') price_buy : ElementRef;
  @ViewChild('price_sell') price_sell : ElementRef;
  @ViewChild('price_wholesale') price_wholesale : ElementRef;
  @ViewChild('description') description : ElementRef;
  @ViewChild('product_code') product_code : ElementRef;
  @ViewChild('photo') photo : ElementRef;

  @ViewChild('save') save : ElementRef;

  @Input('productData') productData : ProductModel;
  @Input('title') title : string;
  @Output() emitProduct = new EventEmitter<ProductModel>();

  constructor(
      public renderer : Renderer2,
      
  ) {
      this.productModel = new ProductModel(1,'nombre 2','marca 2',10,20,15,'descripcion 1','codigo de producto 1','foto 1');

   }

  ngOnInit(): void {
  }
    ngOnChanges(): void {
        this.productModel = ( this.productData ) ? this.productData : new ProductModel(1,'','',0,0,0,'','','');
        
    }



    /** SEND PRODUCT
     * @observations envio de la data del producto al padre, la logica de las acciones realizadas con los datos seran manejadas por el.
     */
    sendProduct(){
        this.emitProduct.emit( this.productModel );
        console.log( this.productModel );
    }

    /** VALIDATIONS
     * @observations validaciones necesarias para el envio de datos a la API
     * @returns 
     */
    validations(){
        let continuo = true;

        if ( this.productModel.brand == ''){
            this.renderer.addClass( this.brand.nativeElement,'border-error');
            continuo = false;
        }
        if ( this.productModel.id_type == -1){
            this.renderer.addClass( this.brand.nativeElement,'border-error');
            continuo = false;
        }
        if ( this.productModel.name == ''){
            this.renderer.addClass( this.name.nativeElement,'border-error');
            continuo = false;
        }
        return continuo
    }

    /** REMOVE CLASS
     * @observations detectamos cambios en los inputs del componente para remover la clase 'border-error'
     */
    removeClass(){
        this.renderer.listen( this.brand.nativeElement,'change',(event) =>{
            this.renderer.removeClass(this.brand.nativeElement,'botder-error');
        });
        this.renderer.listen( this.id_type.nativeElement,'change',(event) =>{
            this.renderer.removeClass( this.id_type.nativeElement,'border-error');
        });
        this.renderer.listen( this.name.nativeElement,'change',(event) =>{
            this.renderer.removeClass( this.name.nativeElement,'border-error');
        })
    }

    

}
