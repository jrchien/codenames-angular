import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TreasureCardModule } from '../treasurecard/treasure-card.module';
import { LayoutComponent } from './view/layout.component';

@NgModule({
    imports: [SharedModule, TreasureCardModule],
    declarations: [LayoutComponent],
    exports: [LayoutComponent]
})
export class LayoutModule { }
