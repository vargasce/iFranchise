import { Component, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.css']
})
export class CustomSearchComponent implements OnInit {

  @Output() search = new EventEmitter();
  @Input('title') title : string;
  @ViewChild('description') description : any;

  constructor(
      private renderer : Renderer2,
  ) { }

  ngOnInit(): void { 
      setTimeout( ()=>{
          this.subscriveEvent();
      },200);
  }

  /** SUBSCRIVE EVENT
   * @observations : Ejecuta subscripcion de eventos para los inputs si es necesario.
   */
  subscriveEvent(){
      this.renderer.listen( this.description.nativeElement, 'keyup', ( event )=>{
          this.search.emit( this.description.nativeElement.value );
      });
  }

  



}
