import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path : '' , loadChildren : () => import('./Pages/pages.module').then( referenciaPages => referenciaPages.PagesModule) }
]


@NgModule({
	imports : [RouterModule.forRoot(routes)],
	exports : [RouterModule]
})
export class AppRoutingModule {}


