import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button mat-button class="btn">{{ buttonText }}</button>`,
  styles: [`.btn{padding: 11px 35px; background-color: #0033FF; letter-spacing: 1px; line-height: 1.5; border: unset; border-radius:105px; color: #fff; } .btn:hover{cursor: pointer}`]
})
export class ButtonComponent {
  @Input() buttonText: string = '';
}
