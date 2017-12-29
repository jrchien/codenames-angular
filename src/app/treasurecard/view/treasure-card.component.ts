import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TreasureCard } from '../model/treasure-card';

@Component({
  selector: 'app-treasure-card',
  templateUrl: './treasure-card.component.html',
  styleUrls: ['./treasure-card.component.css']
})
export class TreasureCardComponent {

  @Input()
  card: TreasureCard;

  @Output()
  onSelect: EventEmitter<void> = new EventEmitter<void>();

  showImage: boolean;

  getImageUrl(): string {
    const imageUrl = 'https://semantic-ui.com/images/avatar2/large/kristy.png';
    return this.card.imageUrl || imageUrl;
  }

  selectCard(): void {
    this.onSelect.emit();
  }

  revealImage(): void {
    this.showImage = true;
  }

  hideImage(): void {
    this.showImage = false;
  }

}
