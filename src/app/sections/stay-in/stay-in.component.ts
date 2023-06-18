import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-stay-in',
  templateUrl: './stay-in.component.html',
  styleUrls: ['./stay-in.component.scss'],
})
export class StayInSectionComponent implements OnInit {
  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.scrollService.getScrollObservable().subscribe(() => {
       this.scrollIntoView()
       })
  }
  scrollIntoView(){
    const element = document.getElementById('stayInSection')
    if (element){
      element.scrollIntoView({behavior: 'smooth'})
    }
  }
}
