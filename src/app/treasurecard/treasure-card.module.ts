import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TreasureCardComponent } from './view/treasure-card.component';

@NgModule({
    imports: [SharedModule],
    declarations: [TreasureCardComponent],
    exports: [TreasureCardComponent]
})
export class TreasureCardModule { }
