import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SecurityRoutingModule} from './security-routing.module';
import {SecurityComponent} from './security.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SignupPageComponent} from "./components/signup-page/signup-page.component";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    SecurityComponent,
    SignupPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class SecurityModule {
}
