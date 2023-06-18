import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {


  isLoggedIn: boolean = false;

  constructor(private dialog: MatDialog) {

  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: `500px`,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.isLoggedIn = result;
    });
  }
  signUp() {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      width: `500px`,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.isLoggedIn = result;
    });

  }

  logout() {
    this.isLoggedIn = false;
  }


}
