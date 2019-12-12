import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { MainComponent } from './index/main/main.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NavComponent, FooterComponent, MainComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
