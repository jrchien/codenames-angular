import { Component, OnInit } from '@angular/core';

import { Deck } from './deck/model/deck';
import { LayoutSettings } from './layout/model/layout-settings';
import { MockTreasureCards } from './shared/util/mock-treasure-cards';
import { DeckService } from './deck/service/deck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  deck: Deck;
  settings: LayoutSettings;

  constructor(private deckService: DeckService) { }

  ngOnInit(): void {
    this.deck = this.deckService.getRandomWordDeck(100);
    this.settings = {
      dimensions: LayoutSettings.MIN_DIMENSIONS,
      displayType: LayoutSettings.TEXT_ONLY
    };
  }

}
