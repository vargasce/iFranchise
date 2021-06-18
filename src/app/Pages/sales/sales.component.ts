import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  @ViewChild('loaddata') loaddata : ElementRef;
  @ViewChild('inventory') inventory : ElementRef;
  @ViewChild('sales') sales : ElementRef;
  @ViewChild('tracking') tracking : ElementRef;

  constructor(
    public renderer : Renderer2,
    private _navigation : Router,
  ) { }

  ngOnInit() {
    setTimeout( ()=>{
      this.redirectEvent();
    },300);
  }

  
    /** CLICK EVENT
     * @observations evento de subscripcion a los buttons para moverse a los distintos modulos
     */
     redirectEvent(){
      this.renderer.listen( this.loaddata.nativeElement, 'click', ( event ) =>{
          this._navigation.navigate(['load-data']);
      });
      this.renderer.listen( this.tracking.nativeElement,'click',(event) =>{
          this._navigation.navigate(['tracking']);
      });
      this.renderer.listen( this.sales.nativeElement,'click',( event ) =>{
          this._navigation.navigate(['sales']);
      });
      this.renderer.listen( this.inventory.nativeElement,'click', ( event ) =>{
          this._navigation.navigate(['inventory']);
      });
    }
  
}
