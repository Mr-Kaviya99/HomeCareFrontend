import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminVerificationPoolComponent} from "./components/admin-verification-pool/admin-verification-pool.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {AdminMainPageComponent} from "./components/admin-main-page/admin-main-page.component";
import {JobTypeComponent} from "./components/admin-dashboard/inner-items/job-type/job-type.component";
import {TradePersonComponent} from "./components/admin-dashboard/inner-items/trade-person/trade-person.component";
import {ComplaintsComponent} from "./components/admin-dashboard/inner-items/complaints/complaints.component";
import {
  NewJobTypeComponent
} from "./components/admin-dashboard/inner-items/job-type/items/new-job-type/new-job-type.component";

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: 'verification', component: AdminVerificationPoolComponent},
      {
        path: 'dashboard', component: AdminDashboardComponent, children: [
          {path: '', redirectTo: 'main-page', pathMatch: "full"},
          {path: 'main-page', component: AdminMainPageComponent},
          {
            path: 'job-type', component: JobTypeComponent, children: [
              {path: '', redirectTo: 'new', pathMatch: "full"},
              {path: 'new', component: NewJobTypeComponent},
              {path: 'all', component: AdminMainPageComponent},
            ]
          },
          {path: 'trade-person', component: TradePersonComponent},
          {path: 'complaints', component: ComplaintsComponent},
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
