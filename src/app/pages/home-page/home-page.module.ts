import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from '../../modules/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';


@NgModule({
    declarations: [
    HomeComponent,
  ],
    imports: [ 
        CommonModule,
        HomeRoutingModule,
        MaterialModule,
        FormsModule
     ],
    exports: [],
    providers: [],
})
export class HomeModule {}