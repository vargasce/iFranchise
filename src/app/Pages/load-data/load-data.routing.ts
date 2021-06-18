import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoadDataComponent } from './load-data.component';
import { ProductListComponent } from './product-list/product-list.component'
import { ProductNewComponent } from './product-new/product-new.component'
import { ProductUpdateComponent } from './product-update/product-update.component'
import { ProductTypeComponent } from './product-type/product-type.component';

const routes: Routes = [
  { path : '', component : LoadDataComponent ,
		children : [
			 { path : 'product-list', component : ProductListComponent },
			 { path : 'product-new', component : ProductNewComponent },
			 { path : 'product-update/:id', component : ProductUpdateComponent },
			 { path : 'type-product', component : ProductTypeComponent}
		]
	},
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadDataRoutingModule { }
