import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../Pages/login/login.component';

const routes: Routes = [
  { path : '', component : LoginComponent },
  { path : 'home', component : HomeComponent },
  { path : 'inventory', loadChildren: () => import('./inventory/inventory.module').then( referenciaModule => referenciaModule.InventoryModule ) },
  { path : 'tracking', loadChildren : () => import('./tracking/tracking.module').then( referenciaTrackong => referenciaTrackong.TrackingModule ) },
  { path : 'sales', loadChildren : () => import('./sales/sales.module').then( referenciaSales => referenciaSales.SalesModule ) },
  { path : 'load-data', loadChildren : () => import('./load-data/load-data.module').then( referenciaLoaddata => referenciaLoaddata.LoadDataModule ) }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
