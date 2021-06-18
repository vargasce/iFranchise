import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { SalesRoutingModule } from './sales.routing';
import { SalesNewComponent } from './sales-new/sales-new.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { ComponentsModule } from "../../Components/components.module";

@NgModule({
    declarations : [

    SalesNewComponent,

    SalesListComponent],
    imports : [
        SalesRoutingModule,
        ComponentsModule,
    ],
    schemas : [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class SalesModule {
    static forRoot(): ModuleWithProviders<any>{
        return{
            ngModule : SalesModule
        }
    }
}