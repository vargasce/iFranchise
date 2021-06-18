import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { UserModel } from '../../Core/models/user.model';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  public userModel : UserModel;

  @ViewChild('name') name : ElementRef;
  @ViewChild('last_name') last_name : ElementRef;
  @ViewChild('user') user : ElementRef;
  @ViewChild('email') email : ElementRef;
  @ViewChild('password') password : ElementRef;

  @ViewChild('repassword') repassword : ElementRef;

  @Output() emitUser = new EventEmitter<any>();


  constructor(
      public renderer : Renderer2,
  ) { }

  ngOnInit(): void {
  }

    /**
     * @observations envio de <UserModel> al padre, la logica de las acciones sera manejada por este
     */
    sendUser(){
        if ( this.validations() == true){
            this.emitUser.emit( this.userModel );
        }
    }

    /** VALIDATIONS
     * @observations Validaciones necesarias para el envio de la data a la API 
     * @returns true / false
     */
    validations(){
        let continuo = true;
        if ( this.userModel.email == ''){
            this.renderer.addClass( this.email.nativeElement,'border error');
        }
        if ( this.userModel.last_name == ''){
            this.renderer.addClass( this.last_name.nativeElement,'border-error');
        }
        if ( this.userModel.name == ''){
            this.renderer.addClass( this.name.nativeElement,'border-error');
        }
        if ( this.userModel.password == ''){
            this.renderer.addClass( this.password.nativeElement,'border-error');
        }
        if ( this.userModel.user == ''){
            this.renderer.addClass( this.user.nativeElement,'border-error');
        }
        if ( this.repassword.nativeElement.value == ''){
            this.renderer.addClass( this.repassword.nativeElement,'border,error');
        }
        if ( this.userModel.password != this.repassword.nativeElement.value){
            this.renderer.addClass( this.password.nativeElement,'border-error');
            this.renderer.addClass( this.repassword.nativeElement,'border-error');
        }

        return continuo;
    }

    /** EVENT ERROR
     * @observations
     */
    eventError(){
        this.renderer.listen( this.email.nativeElement,'change',( event )=>{
            this.renderer.removeClass( this.email.nativeElement,'border-error');
        })
        this.renderer.listen( this.last_name.nativeElement,'change', ( event )=>{
            this.renderer.removeClass( this.last_name.nativeElement,'border-error');
        })
        this.renderer.listen( this.name.nativeElement,'change', ( event )=>{
            this.renderer.removeClass( this.name.nativeElement,'border-error');
        })
        this.renderer.listen( this.password.nativeElement,'change', ( event )=>{
            this.renderer.removeClass( this.password.nativeElement,'border-error')
        })
    }

}
