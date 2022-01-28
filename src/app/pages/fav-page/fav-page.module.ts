import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from '../../modules/material.module';
import { FavRoutingModule } from './fav-routing.module';
import { FormsModule } from '@angular/forms';

import { FavComponent } from './components/fav/fav.component';

@NgModule({
    declarations: [FavComponent],
    imports: [ 
        CommonModule,
        FavRoutingModule,
        MaterialModule,
        FormsModule
     ],
    exports: [],
    providers: [],
})
export class FavModule {}