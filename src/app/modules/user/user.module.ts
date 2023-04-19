import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {UserHeaderComponent} from './components/user-header/user-header.component';
import {UserMainSliderComponent} from './components/user-main-slider/user-main-slider.component';
import {UserServicesComponent} from './components/user-services/user-services.component';
import {UserInquiriesComponent} from './components/user-inquiries/user-inquiries.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {ShareModule} from "../share/share.module";
import {MatDialogModule} from "@angular/material/dialog";
import {GetHiredComponent} from './components/user-services/inner-items/get-hired/get-hired.component';
import {UserReviewPopUpComponent} from './components/user-review-pop-up/user-review-pop-up.component';
import {UserComplaintPopUpComponent} from './components/user-complaint-pop-up/user-complaint-pop-up.component';
import {AgmCoreModule} from "@agm/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UserComponent,
    UserHeaderComponent,
    UserMainSliderComponent,
    UserServicesComponent,
    UserInquiriesComponent,
    GetHiredComponent,
    UserReviewPopUpComponent,
    UserComplaintPopUpComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    ShareModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChTFGjMCRixSy3lNDf5zovNk6b4L3VwIo'
    }),
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserModule {
}
