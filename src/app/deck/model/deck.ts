import { ArrayUtil } from '../../shared/util/array-util';
import { TreasureCards } from '../../treasurecard/model/treasure-card';

export class Deck {
    name: string;
    cards: TreasureCards;

    constructor(name, cards) {
        this.name = name;
        this.cards = cards;
    }

    getMaxDimensions(): number {
        return Math.floor(Math.sqrt(this.cards.length));
    }

    getImageCards(): TreasureCards {
        return this.cards.filter(card => card.imageUrl);
    }

    shuffle(): void {
        ArrayUtil.shuffle(this.cards);
    }
}

export declare type Decks = Deck[];
