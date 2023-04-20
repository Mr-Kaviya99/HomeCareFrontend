import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TradePersonComponent} from './trade-person.component';
import {TradePersonMainPageComponent} from "./components/trade-person-main-page/trade-person-main-page.component";
import {
  TradePersonRegistrationComponent
} from "./components/trade-person-registration/trade-person-registration.component";
import {TradePersonDashboardComponent} from "./components/trade-person-dashboard/trade-person-dashboard.component";
import {
  TradePersonMyProfileComponent
} from "./components/trade-person-dashboard/inner-items/trade-person-my-profile/trade-person-my-profile.component";
import {
  TradePersonJobRequestsComponent
} from "./components/trade-person-dashboard/inner-items/trade-person-job-requests/trade-person-job-requests.component";
import {
  TradePersonReviewsComponent
} from "./components/trade-person-dashboard/inner-items/trade-person-reviews/trade-person-reviews.component";
import {
  TradePersonComplaintsComponent
} from "./components/trade-person-dashboard/inner-items/trade-person-complaints/trade-person-complaints.component";
import {
  TradePersonVerificationPoolComponent
} from "./components/trade-person-verification-pool/trade-person-verification-pool.component";

const routes: Routes = [
  {
    path: '', component: TradePersonComponent, children: [
      {path: '', redirectTo: '', pathMatch: "full"},
      {path: 'main-page', component: TradePersonMainPageComponent},
      {path: 'registration', component: TradePersonRegistrationComponent},
      {path: 'verification', component: TradePersonVerificationPoolComponent},
      {
        path: 'dashboard', component: TradePersonDashboardComponent, children: [
          {path: '', redirectTo: 'my-profile', pathMatch: "full"},
          {path: 'my-profile', component: TradePersonMyProfileComponent},
          {path: 'job-requests', component: TradePersonJobRequestsComponent},
          {path: 'reviews', component: TradePersonReviewsComponent},
          {path: 'complaints', component: TradePersonComplaintsComponent},
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradePersonRoutingModule {
}
