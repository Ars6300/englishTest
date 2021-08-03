import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  exports: [
    MatStepperModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class MaterialModule {}
