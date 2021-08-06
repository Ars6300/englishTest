import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [
    MatStepperModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
  ],
})
export class MaterialModule {}
