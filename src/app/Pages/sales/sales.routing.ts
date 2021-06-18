import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SalesComponent } from './sales.component';

const routes: Routes = [
  { path : '', component : SalesComponent ,
		children : [
		//	 { path : 'product-list', component : ProductListComponent },
		//	 { path : 'product-new', component : ProductNewComponent },
		//	 { path : 'product-update', component : ProductUpdateComponent },
		]
	},
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }