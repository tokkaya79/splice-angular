import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(
    public dialogRef: MatDialogRef<RegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) _pablic: any
  ) {}

  register() {
    this.dialogRef.close(true);
  }
  closeRegistration() {
    this.dialogRef.close();
  }
}
