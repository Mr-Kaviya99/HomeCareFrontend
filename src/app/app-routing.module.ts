import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'console', pathMatch: "full"},
  {
    path: 'console',
    loadChildren: () => import('./modules/console/console.module').then(m => m.ConsoleModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule)
  },
  {
    path: 'share', loadChildren: () => import('./modules/share/share.module').then(m => m.ShareModule)
  },
  {
    path: 'trade-person',
    loadChildren: () => import('./modules/trade-person/trade-person.module').then(m => m.TradePersonModule)
  },
  {
    path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
