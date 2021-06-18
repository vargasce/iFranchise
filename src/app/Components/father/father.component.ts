import { Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss'],
  providers : [ ElectronService ]
})
export class FatherComponent implements OnInit {

  title = 'angular-dark-theme-togller';
  storedTheme: string = localStorage.getItem('theme-color');

  public resultData : any;
  public ObjectModel : any= {};
  @Input('menuBar') menuBar : any;
  @Output() evtClickMenu = new EventEmitter<string>();

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


  setTheme(){
    if(this.storedTheme === 'theme-dark'){
      //toggle and update local storage
      localStorage.setItem('theme-color', 'theme-light');
      this.storedTheme = localStorage.getItem('theme-color');
    }else{
      //toggle and update local storage
      localStorage.setItem('theme-color', 'theme-dark');
      this.storedTheme = localStorage.getItem('theme-color');
    }
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
