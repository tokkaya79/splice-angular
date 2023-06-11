import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  @Input() textAbout:  string='';
  @Input() photoUrl:  string='';
  @Input() nameAuth:  string='';
  @Input() positionAuth:  string='';

}
