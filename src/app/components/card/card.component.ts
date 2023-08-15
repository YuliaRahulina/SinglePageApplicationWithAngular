import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data: any = {}

  textLength() {
      if (this.data.summary.length > 100) {
      return this.data.summary.substring(0, 100).trim() + "...";
    } else {
        return this.data.summary
      }
  }

  getDate() {
    const dateObject = new Date(this.data.published_at);
    const monthName = dateObject.toLocaleString('en-US', { month: 'long' });

    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();

    return `${monthName} ${day}th, ${year}`
  }
}
