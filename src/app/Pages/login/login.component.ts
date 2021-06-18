import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('home') home : ElementRef;

  constructor(
      public renderer : Renderer2,
      private _navigation : Router
  ) { }

  ngOnInit(): void {
    setTimeout( ()=>{
      this.redirectEvent();
    },300);
  }

  redirectEvent(){
      this.renderer.listen( this.home.nativeElement,'click', ( event ) =>{
          this._navigation.navigate(['home']);
      })
  }

}
