import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Logo {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-logos-section',
  templateUrl: './logos-section.component.html',
  styleUrls: ['./logos-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogosSectionComponent {
  logos: Logo[] = [
    { src: 'assets/images/logos/billboard.png', alt: 'billboard' },
    { src: 'assets/images/logos/complex.png', alt: 'complex' },
    { src: 'assets/images/logos/variety.png', alt: 'variety' },
    { src: 'assets/images/logos/verge.png', alt: 'verge' },
    { src: 'assets/images/logos/wired.png', alt: 'wired' },
  ];
}
