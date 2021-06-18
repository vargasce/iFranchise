import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

    /** PRODUCT GRID COMPONENT
     *  @observations Componente utilizado para contener tuplas relacionadas a la tabla PRODUCT de la DB
     */


  @Input('list') list : any; //  Object -> { 'list' , 'listHearders', 'options', 'actualPage', 'cantidadPaginas', 'totalpaginas'}
  @Output() updateEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  // @Output() next = new EventEmitter();
  // @Output() back = new EventEmitter();

  // objetos para el funcionamiento del componente product-grid en la Page en la cual lo importo 
  // public table : any = {};
  // public tableOptions : any = {}
  // public headersList : array = []

  public table : any;
  public headers : any;
  public gridOptions : any;
  public actualPage : any;


  constructor() { }

  ngOnInit(): void {
  }


    OnChanges ( changes : SimpleChanges ):void {
        if ( !changes.listTable.firstChange ) {
            this.listUpdate();
        }
    }

    /** LIST UPDATE
     *  @observations Actualiza la informacion que se muestra en la grilla de productos
     */
    listUpdate(){
        this.table = this.list.list;
        this.headers = this.list.listHeaders;
        this.gridOptions = this.list.options;
        this.actualPage = this.list.actualPage;
    }

    /** UPDATE PRODUCT EVENT
     * @observations Evento CLICK para el evento Update de un producto 
     */
    updateProductEvent( cod_product : string):void{
        this.updateEvent.emit( cod_product );
    }


    /** DELETE PRODUCT EVENT
     * @observations Evento CLICK para el evento Delete de un producto
     */
    deleteProductEvent( cod_product : string ):void{
        this.deleteEvent.emit( cod_product );
    }

}
