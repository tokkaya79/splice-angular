import { Component, ViewChild} from '@angular/core';
import { AuthComponent } from 'src/app/components/auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
@ViewChild(AuthComponent) authComponent!: AuthComponent;

signUp(){
  if(this.authComponent){
    this.authComponent.signUp()
  }
}
}
