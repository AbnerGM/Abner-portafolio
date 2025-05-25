import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PresentacionComponent } from './pages/presentacion/presentacion.component';

@NgModule({
  declarations: [
    PresentacionComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [PresentacionComponent]
})
export class AppModule { }
