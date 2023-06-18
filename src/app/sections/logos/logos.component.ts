import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Logo {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogosSectionComponent {
  logos: Logo[] = [
    { src: 'assets/images/logos/logo-img1.png', alt: 'billboard' },
    { src: 'assets/images/logos/logo-img2.png', alt: 'complex' },
    { src: 'assets/images/logos/logo-img3.png', alt: 'variety' },
    { src: 'assets/images/logos/logo-img4.png', alt: 'verge' },
    { src: 'assets/images/logos/logo-img5.png', alt: 'wired' },
  ];
}
