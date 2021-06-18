import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { LoadDataRoutingModule } from './load-data.routing';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ComponentsModule } from '../../Components/components.module';
import { ProductTypeComponent } from './product-type/product-type.component';
import { TypeShippingComponent } from './type-shipping/type-shipping.component';

@NgModule({
    declarations : [

    ProductNewComponent,
    ProductUpdateComponent,
    ProductListComponent,
    ProductTypeComponent,
    TypeShippingComponent],

    imports : [
        LoadDataRoutingModule,
        ComponentsModule,

    ],
    schemas : [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class LoadDataModule {
    static forRoot(): ModuleWithProviders<any>{
        return{
            ngModule : LoadDataModule
        }
    }
}