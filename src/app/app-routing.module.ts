import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'device-registration',
    loadChildren: () => import('./pages/device-registration/device-registration.module').then( m => m.DeviceRegistrationPageModule)
  },
  {
    path: 'invoice-selection',
    loadChildren: () => import('./pages/invoice-selection/invoice-selection.module').then( m => m.InvoiceSelectionPageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
