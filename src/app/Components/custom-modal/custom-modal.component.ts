import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {

  @Input('dataModal') dataModal : any;
  @Input('title') title : string;


  public ShowModal : boolean;
  public ShowInput : boolean;
  public text : string;

  constructor(

  ) { 

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (!changes.dataModal.firstChange ){
          this.text = this.dataModal.message;
          this.ShowModal = this.dataModal.IsShowModal;
      }      
  }


    /** TOGGLE MODAL
     * @observations Controla para que se vea o deje de verse el Modal
     */
    toggleModal():void{
        if ( this.ShowModal == true ){
            this.ShowModal = true;
        }else{
            this.ShowModal = !this.ShowModal;
        }
    }

}
