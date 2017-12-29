import { TreasureCard, TreasureCards } from '../../treasurecard/model/treasure-card';

export class MockTreasureCards {
    static getCards(n: number): TreasureCards {
        const array = MockTreasureCards.getArray(n);
        return array.map(name => ({ name } as TreasureCard));
    }

    private static getArray(n: number): string[] {
        return Array.from(Array(n), (value, index) => String(index + 1));
    }
}
