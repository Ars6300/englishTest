import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private _snackBar: MatSnackBar) {}
  logError(message: string) {
    this._snackBar.open(message, 'X', {
      duration: 5000,
      panelClass: ['notification'],
    });
  }
}
