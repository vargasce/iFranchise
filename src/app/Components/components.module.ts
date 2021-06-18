import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductDataComponent } from './product-data/product-data.component';
import { UserDataComponent } from './user-data/user-data.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { CustomSearchComponent } from './custom-search/custom-search.component';
import { CustomSearchPeriodComponent } from './custom-search-period/custom-search-period.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { MenuModuleComponent } from './menu-module/menu-module.component';
import { CommonModule } from '@angular/common';
import { LoadstockDataComponent } from './loadstock-data/loadstock-data.component';
import { SellDataComponent } from './sell-data/sell-data.component';
import { FatherComponent } from './father/father.component';
import { ProductGridComponent } from './product-grid/product-grid.component';

@NgModule({
	declarations : [
		ProductDataComponent,
		UserDataComponent,
		CustomModalComponent,
		CustomSearchComponent,
		CustomSearchPeriodComponent,
		MenuUserComponent,
		MenuModuleComponent,
		LoadstockDataComponent,
		SellDataComponent,
		FatherComponent,
		ProductGridComponent
	],
	imports : [
		CommonModule

	],
	exports : [
		ProductDataComponent,
		UserDataComponent,
		CustomModalComponent,
		CustomSearchComponent,
		CustomSearchPeriodComponent,
		MenuUserComponent,
		MenuModuleComponent,
		LoadstockDataComponent,
		FatherComponent,
		SellDataComponent,
		ProductGridComponent
		
	],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ComponentsModule {
	static forRoot() : ModuleWithProviders<any>{
		return{
			ngModule : ComponentsModule
		}
	}
}
