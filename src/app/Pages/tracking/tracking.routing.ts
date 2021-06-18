import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TrackingComponent } from './tracking.component';

const routes: Routes = [
  { path : '', component : TrackingComponent ,
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
export class TrackingRoutingModule { }