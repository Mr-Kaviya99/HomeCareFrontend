import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {
  TradePersonMainPageComponent
} from "../trade-person/components/trade-person-main-page/trade-person-main-page.component";

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      {path: '', redirectTo: '', pathMatch: "full"},
      {path: 'main-page', component: TradePersonMainPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
