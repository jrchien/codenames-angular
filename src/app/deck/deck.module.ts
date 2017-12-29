import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DeckSelectionComponent } from './view/deck-selection.component';

@NgModule({
    imports: [SharedModule],
    declarations: [DeckSelectionComponent],
    exports: [DeckSelectionComponent]
})
export class DeckModule { }
