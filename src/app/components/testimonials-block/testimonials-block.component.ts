import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials-block',
  templateUrl: './testimonials-block.component.html',
  styleUrls: ['./testimonials-block.component.scss'],
})
export class TestimonialsBlockComponent {
  testimonials = [
    {
      textAbout:
        'I can always find what Im looking for on Splice, whether its the exact sound I want or just a bit of inspiration.',
      photoUrl: 'assets/images/creators/creators-img1.png',
      nameAuth: 'Andrew Huang',
      positionAuth: 'Artist',
    },
    {
      textAbout:
        'Finally a way to buy plugins that works. By paying a little at a time, producers can get legit access to the top VSTs.',
      photoUrl: 'assets/images/creators/creators-img2.png',
      nameAuth: 'KSHMR',
      positionAuth: 'Artist',
    },
    {
      textAbout:
        'Its been fun to dive into Splices creator community and explore tools that support my own creative process.',
      photoUrl: 'assets/images/creators/creators-img3.png',
      nameAuth: 'Kesha Lee',
      positionAuth: 'Artist',
    },
    {
      textAbout:
        'I can always find what Im looking for on Splice, whether its the exact sound I want or just a bit of inspiration.',
      photoUrl: 'assets/images/creators/creators-img4.png',
      nameAuth: 'Andrew Huang',
      positionAuth: 'Artist',
    },
  ];
}
