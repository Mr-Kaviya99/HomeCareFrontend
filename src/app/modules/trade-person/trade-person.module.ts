import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TradePersonRoutingModule} from './trade-person-routing.module';
import {TradePersonComponent} from './trade-person.component';
import {TradePersonMainPageComponent} from './components/trade-person-main-page/trade-person-main-page.component';
import {
  TradePersonRegistrationComponent
} from './components/trade-person-registration/trade-person-registration.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {TradePersonDashboardComponent} from './components/trade-person-dashboard/trade-person-dashboard.component';
import {TradePersonHeaderComponent} from './components/trade-person-header/trade-person-header.component';
import {ShareModule} from "../share/share.module";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {
  TradePersonMyProfileComponent
} from './components/trade-person-dashboard/inner-items/trade-person-my-profile/trade-person-my-profile.component';
import {
  TradePersonJobRequestsComponent
} from './components/trade-person-dashboard/inner-items/trade-person-job-requests/trade-person-job-requests.component';
import {
  TradePersonReviewsComponent
} from './components/trade-person-dashboard/inner-items/trade-person-reviews/trade-person-reviews.component';
import {
  TradePersonComplaintsComponent
} from './components/trade-person-dashboard/inner-items/trade-person-complaints/trade-person-complaints.component';
import {AgmCoreModule} from "@agm/core";
import {MatTooltipModule} from "@angular/material/tooltip";
import { TradePersonVerificationPoolComponent } from './components/trade-person-verification-pool/trade-person-verification-pool.component';
import {NgxStarRatingModule} from "ngx-star-rating";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    TradePersonComponent,
    TradePersonMainPageComponent,
    TradePersonRegistrationComponent,
    TradePersonDashboardComponent,
    TradePersonHeaderComponent,
    TradePersonMyProfileComponent,
    TradePersonJobRequestsComponent,
    TradePersonReviewsComponent,
    TradePersonComplaintsComponent,
    TradePersonVerificationPoolComponent,
  ],
  imports: [
    CommonModule,
    TradePersonRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    ShareModule,
    MatIconModule,
    MatTabsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChTFGjMCRixSy3lNDf5zovNk6b4L3VwIo'
    }),
    MatTooltipModule,
    NgxStarRatingModule,
    NgbModule
  ]
})
export class TradePersonModule {
}
