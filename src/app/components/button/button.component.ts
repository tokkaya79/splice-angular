import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button mat-button class="btn" >{{ buttonText }}</button>`,
  styles: [
    `.mat-mdc-button:not(:disabled){
      color: #fff;
    }
      .btn {
        margin-top: 40px;
        padding: 25px 35px;
        background-color: #0033ff;
        letter-spacing: 1px;
        line-height: 1.5;
        border: unset;
        border-radius: 105px;
        transition: background-color 0.3s ease;
      }
      .btn:hover {
        cursor: pointer;
      }
      .btn:active{
        background-color: #032cd2;

      }
    `,
  ],
})
export class ButtonComponent {
  @Input() buttonText: string = '';



}
