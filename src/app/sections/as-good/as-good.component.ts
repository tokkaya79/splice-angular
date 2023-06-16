import { Component } from '@angular/core';

@Component({
  selector: 'app-as-good',
  templateUrl: './as-good.component.html',
  styleUrls: ['./as-good.component.scss'],
})
export class AsGoodComponent {
  items = [
    {
      iconUrl: 'assets/images/icons/sound-asGood.png',
      title: '100 royalty free  ',
      text: 'Use sounds for anything. They’re cleared for commercial use.',
    },
    {
      iconUrl: 'assets/images/icons/lock-asGood.png',
      title: 'No commitments',
      text: 'Cancel your subscription at any time, no questions asked.',
    },
    {
      iconUrl: 'assets/images/icons/arrow-asGood.png',
      title: 'Yours forever',
      text: 'Keep everything you download. Even if you cancel.',
    },
    {
      iconUrl: 'assets/images/icons/play-asGood.png',
      title: 'Individual samples',
      text: 'Preview & download individual samples, not just full packs.',
    },
  ];
}
