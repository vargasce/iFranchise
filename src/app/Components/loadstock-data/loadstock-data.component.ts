import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { LoadModel } from '../../Core/models/load.model';
import { CustomDateService } from '../../Core/services/custom-date/custom-date.service';

@Component({
  selector: 'app-loadstock-data',
  templateUrl: './loadstock-data.component.html',
  styleUrls: ['./loadstock-data.component.css']
})
export class LoadstockDataComponent implements OnInit {

  public loadModel : LoadModel;

  @ViewChild('id_product') id_product : ElementRef;
  @ViewChild('quantity') quantity : ElementRef;
  @ViewChild('load_date') load_date : ElementRef;

  @Output() emitLoad  = new EventEmitter<any>();

  constructor(
      public dateService : CustomDateService,
      public renderer : Renderer2,
  ) { }

  ngOnInit(): void {
  }


}
