import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-as-good-item',
  templateUrl: './as-good-item.component.html',
  styleUrls: ['./as-good-item.component.scss']
})
export class AsGoodItemComponent {
  @Input() iconUrl: string='';
  @Input() title: string='';
  @Input() text: string='';
}
