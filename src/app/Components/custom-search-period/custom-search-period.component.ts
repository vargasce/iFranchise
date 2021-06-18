import { Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { EventEmitter } from 'events';
import { CustomDateService } from '../../Core/services/custom-date/custom-date.service';

@Component({
  selector: 'app-custom-search-period',
  templateUrl: './custom-search-period.component.html',
  styleUrls: ['./custom-search-period.component.css']
})
export class CustomSearchPeriodComponent implements OnInit {

  public since : Date;
  public until : Date;

  @Input('title') title : string;
  @ViewChild('sinceForm') sinceForm : ElementRef;
  @ViewChild('untilForm') untilForm : ElementRef;
  @Output() search = new EventEmitter();



  constructor(
      public dateService : CustomDateService,
      public renderer: Renderer2,
  ) { }

  ngOnInit(): void {
  }

  /** SEARCH EVENT
   * @observations envio un objeto contenedor de las DATES que conforman el periodo por el cual buscar
   */
  searchEvent(){
      let send = {
          'since' : this.dateService.serialDateFormat( this.since ),
          'until' : this.dateService.serialDateFormat( this.until ),
      }

      // this.search.emit( send );
  }

  /** VALIDATIONS
   * @observations validaciones necesarias para el envio de la informacion a la API, en caso de no cumplirlas se pondra la clase 'border-error'
   * @returns TRUE // FALSE
   */
  validations(){
      let continuo = true;
      if( this.since.toString() == ''){
          this.renderer.addClass( this.sinceForm.nativeElement, 'border-error')
          continuo = false
      };

      if( this.until.toString() == ''){
          this.renderer.addClass( this.untilForm.nativeElement, 'border-error')
          continuo = false
      };

      if ( this.dateService.dateComparator( this.since , this.until )){
          this.renderer.addClass( this.sinceForm.nativeElement, 'border-error');
          this.renderer.addClass( this.untilForm.nativeElement, 'border-error');
          continuo = false
      };

      return continuo
  }

  /** EVENT ERROR
 * @observations removemos la clase 'border-error' del input
 */
eventError(){
  this.renderer.listen( this.sinceForm.nativeElement, 'change', ( event ) =>{
      this.renderer.removeClass( this.sinceForm.nativeElement, 'border-error')
  });
  this.renderer.listen( this.untilForm.nativeElement, 'change', ( event ) =>{
      this.renderer.removeClass( this.untilForm.nativeElement, 'border-error')
  });
}


}
