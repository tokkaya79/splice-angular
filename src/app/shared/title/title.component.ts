import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnChanges {
  @Input() sectionTitle: string = '';
  lastWord: string = '';
  firstWords: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes["sectionTitle"] && this.sectionTitle) {
      const words = this.sectionTitle.split(' ');
      this.firstWords = this.sectionTitle.split(' ').slice(0, -1).join(' ');
      this.lastWord = words[words.length - 1];
    }
  }
}
