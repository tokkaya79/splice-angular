import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-yacor',
  templateUrl: './btn-yacor.component.html',
  styleUrls: ['./btn-yacor.component.scss'],
})
export class BtnYacorComponent implements OnInit{
  isScrolled: boolean = false;

  @HostListener('window:scroll')


  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollTop > 400;
  }

  ngOnInit(): void {
    this.onWindowScroll();
  }

   scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
