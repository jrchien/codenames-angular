import { Injectable } from '@angular/core';
import * as wordList from 'assets/data/word-list.json';

import { TreasureCard, TreasureCards } from '../../treasurecard/model/treasure-card';
import { Deck } from '../model/deck';

/** Service used to get existing or random decks. */
@Injectable()
export class DeckService {

    static getWordList(): string[] {
        return JSON.parse(JSON.stringify(wordList));
    }

    getRandomWordDeck(cardCount: number): Deck {
        const cards: TreasureCards = [];
        const words = DeckService.getWordList();
        const wordset = new Set<string>();
        while (wordset.size < cardCount) {
            wordset.add(this.getRandomWord(words));
        }
        wordset.forEach(word => {
            cards.push({ name: word.toUpperCase() } as TreasureCard);
        });
        return new Deck(`Sample ${cards.length} (${cards[0].name}...${cards[cards.length - 1].name})`, cards);
    }

    private getRandomWord(words: string[]): string {
        const index = Math.floor(Math.random() * words.length);
        return words[index];
    }
}
