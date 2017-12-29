export class LayoutSettings {
    static IMAGE_ONLY = 'IMAGE_ONLY';
    static TEXT_ONLY = 'TEXT_ONLY';
    static COMBINED = 'COMBINED';

    static MIN_DIMENSIONS = 4;
    static MAX_DIMENSIONS = 7;

    displayType: string;
    dimensions: number;
}
