import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { PagesRoutingModule } from './pages.routing';


//PAGES
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SalesComponent } from './sales/sales.component';
import { ComponentsModule } from '../Components/components.module';
import { TrackingComponent } from './tracking/tracking.component';
import { LoadDataComponent } from './load-data/load-data.component';
import { LoginComponent } from './login/login.component';

//IMPORTS YOUR PAGES MAIN FOR SYSTEM 
@NgModule({
    declarations : [
        HomeComponent,
        InventoryComponent,
        SalesComponent,
        TrackingComponent,
        LoadDataComponent,
        LoginComponent,
    ],
    imports : [
        CommonModule,
        FormsModule,
        HttpClientModule,
        PagesRoutingModule,
        ComponentsModule.forRoot(),
        ComponentsModule
    ],
    schemas : [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class PagesModule {
    static forRoot(): ModuleWithProviders<any>{
        return{
            ngModule : PagesModule
        }
    }
}