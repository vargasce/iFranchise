import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { InventoryRoutingModule } from './inventory.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { StockListComponent } from './stock-list/stock-list.component';
import { StockLoadComponent } from './stock-load/stock-load.component';
import { ComponentsModule } from "../../Components/components.module";


@NgModule({
    declarations : [

    StockListComponent,

    StockLoadComponent],
    imports : [
        CommonModule,
        FormsModule,
        HttpClientModule,
        InventoryRoutingModule,
        ComponentsModule,
    ],
    schemas : [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class InventoryModule {
    static forRoot(): ModuleWithProviders<any>{
        return{
            ngModule : InventoryModule
        }
    }
}