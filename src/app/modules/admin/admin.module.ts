import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminVerificationPoolComponent } from './components/admin-verification-pool/admin-verification-pool.component';
import { AdminMainPageComponent } from './components/admin-main-page/admin-main-page.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { JobTypeComponent } from './components/admin-dashboard/inner-items/job-type/job-type.component';
import { TradePersonComponent } from './components/admin-dashboard/inner-items/trade-person/trade-person.component';
import { ComplaintsComponent } from './components/admin-dashboard/inner-items/complaints/complaints.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ShareModule} from "../share/share.module";
import {MatTabsModule} from "@angular/material/tabs";
import { NewJobTypeComponent } from './components/admin-dashboard/inner-items/job-type/items/new-job-type/new-job-type.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { AllJobTypeComponent } from './components/admin-dashboard/inner-items/job-type/items/all-job-type/all-job-type.component';
import { AllTradePersonComponent } from './components/admin-dashboard/inner-items/trade-person/items/all-trade-person/all-trade-person.component';
import { AllComplaintsComponent } from './components/admin-dashboard/inner-items/complaints/items/all-complaints/all-complaints.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminVerificationPoolComponent,
    AdminMainPageComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    JobTypeComponent,
    TradePersonComponent,
    ComplaintsComponent,
    NewJobTypeComponent,
    AllJobTypeComponent,
    AllTradePersonComponent,
    AllComplaintsComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatButtonModule,
    ShareModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AdminModule { }
