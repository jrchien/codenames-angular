import { Component, Input, OnInit } from '@angular/core';

import { Deck } from '../../deck/model/deck';
import { DeckService } from '../../deck/service/deck.service';
import { TreasureCard } from '../../treasurecard/model/treasure-card';
import { LayoutSettings } from '../model/layout-settings';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    private _deck: Deck;

    @Input()
    set deck(deck: Deck) {
        this._deck = deck;
        this._deck.shuffle();
    }

    get deck(): Deck {
        return this._deck;
    }

    @Input()
    settings: LayoutSettings;

    constructor(private deckService: DeckService) { }

    ngOnInit(): void {
        this.deckService.getRandomWordDeck(5);
    }

    getDimensionsArray(): number[] {
        if (this.settings && this.settings.dimensions) {
            return Array(this.settings.dimensions).fill(0).map((value, index) => index);
        }
        return [];
    }

    getCardInDeck(column: number, row: number): TreasureCard {
        const index = column + (row * this.settings.dimensions);
        return this.deck.cards[index];
    }
}
