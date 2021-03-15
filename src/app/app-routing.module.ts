import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './bandas/pages/home/home.component';

const routes: Routes = [
 
  {
    path: 'bandas',
    loadChildren: () => import('./bandas/bandas.module').then( m => m.BandasModule ),
   
  },
  {
    path: '**',
    redirectTo: 'bandas/listado'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
