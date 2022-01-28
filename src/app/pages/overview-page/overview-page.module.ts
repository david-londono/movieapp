import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from '../../modules/material.module';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './components/overview/overview.component';


@NgModule({
    declarations: [OverviewComponent],
    imports: [ 
        CommonModule,
        OverviewRoutingModule,
        MaterialModule,
    ],
    exports: [],
    providers: [],
})
export class OverviewModule {}