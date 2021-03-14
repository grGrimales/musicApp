import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: 'bandas',
    loadChildren: () => import('./bandas/bandas.module').then( m => m.BandasModule ),
    canLoad: [ AuthGuard ],
    canActivate:[ AuthGuard ]
   
  },
  {
    path: '**',
    //component: ErrorPageComponent
    redirectTo: 'auth'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
