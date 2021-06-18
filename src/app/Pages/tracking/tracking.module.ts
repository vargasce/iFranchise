import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentsModule } from "../../Components/components.module";
import { TrackingRoutingModule } from './tracking.routing';

@NgModule({
    declarations : [

    ],
    imports : [
        TrackingRoutingModule,
        ComponentsModule,
    ],
    schemas : [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class TrackingModule {
    static forRoot(): ModuleWithProviders<any>{
        return{
            ngModule : TrackingModule
        }
    }
}