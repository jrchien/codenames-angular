import { Component, OnInit } from '@angular/core';

import { Deck, Decks } from '../model/deck';
import { DeckService } from '../service/deck.service';
import { LayoutSettings } from '../../layout/model/layout-settings';

@Component({
    selector: 'app-deck-selection',
    templateUrl: './deck-selection.component.html',
    styleUrls: ['./deck-selection.component.css']
})
export class DeckSelectionComponent implements OnInit {
    decks: Decks;
    selectedDeck: Deck;

    dimensionOptions: number[];
    selectedDimension: number;

    constructor(private deckService: DeckService) { }

    ngOnInit(): void {
        for (let index of [1, 2, 3]) {
            const cardCount = 20 + (Math.floor(Math.random() * 20) * index);
            this.decks.push(this.deckService.getRandomWordDeck(cardCount));
        }
    }

    onDeckSelected(deck: Deck): void {
        this.selectedDimension = null;
        let max = deck.getMaxDimensions();
        if (max > LayoutSettings.MAX_DIMENSIONS) {
            max = LayoutSettings.MAX_DIMENSIONS;
        }
        const difference = max - LayoutSettings.MIN_DIMENSIONS;
        this.dimensionOptions = Array(difference).fill(LayoutSettings.MIN_DIMENSIONS).map((value, index) => value + index);
    }
}
