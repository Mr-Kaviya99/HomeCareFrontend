import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) {}

  openWarningSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 10000,
      panelClass: ['warning-snackbar']
    });
  }
  openSuccessSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 10000,
      panelClass: ['success-snackbar']
    });
  }
  openErrorSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 10000,
      panelClass: ['error-snackbar']
    });
  }
}
