import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPopperModule} from 'ngx-popper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { EmptyObjectRemovalPipe } from './empty-object-removal.pipe';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FilterPipe } from './filter.pipe';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    EmptyObjectRemovalPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPopperModule.forRoot({}),
    NgxSmartModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
