import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import { MatChipListbox } from '@angular/material/chips';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatInputModule,
        MatGridListModule,
        MatButtonModule,
        MatTooltipModule,
        MatChipsModule,
     ],
    exports: [
        CommonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatInputModule,
        MatGridListModule,
        MatButtonModule,
        MatTooltipModule,
        MatChipsModule
    ],
    providers: [],
})
export class MaterialModule {}