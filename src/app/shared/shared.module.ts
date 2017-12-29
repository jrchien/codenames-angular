import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';

@NgModule({
    imports: [CommonModule, SuiModule],
    exports: [CommonModule, SuiModule]
})
export class SharedModule { }
