import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShareRoutingModule} from './share-routing.module';
import {ShareComponent} from './share.component';
import {MainFooterComponent} from "./components/main-footer/main-footer.component";
import {MainHeaderContextComponent} from "./components/main-header-context/main-header-context.component";
import {
  MainHeaderTopBarComponent
} from "./components/main-header-context/main-header-top-bar/main-header-top-bar.component";
import {
  MainHeaderNavBarComponent
} from "./components/main-header-context/main-header-nav-bar/main-header-nav-bar.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MainLoadingComponent} from "./components/main-loading/main-loading.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    ShareComponent,
    MainFooterComponent,
    MainHeaderContextComponent,
    MainHeaderTopBarComponent,
    MainHeaderNavBarComponent,
    MainLoadingComponent
  ],
  exports: [
    MainFooterComponent,
    MainHeaderContextComponent,
    MainLoadingComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ]
})
export class ShareModule {
}
