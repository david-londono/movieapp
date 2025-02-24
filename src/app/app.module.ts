import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { MaterialModule} from './modules/material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from './sharedComponents/shared-components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedComponentsModule
  ],
  exports: [
    MaterialModule,
    SharedComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
