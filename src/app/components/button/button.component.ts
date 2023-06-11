import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button mat-button class="btn">{{ buttonText }}</button>`,
  styles: [
    `
      .btn {
        margin-top: 40px;
        padding: 11px 35px;
        background-color: #0033ff;
        letter-spacing: 1px;
        line-height: 1.5;
        border: unset;
        border-radius: 105px;
        color: #fff;
      }
      .btn:hover {
        cursor: pointer;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() buttonText: string = '';
}
