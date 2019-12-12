import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { MainComponent } from './index/main/main.component';
import { BibliotecaComponent } from './secundarias/biblioteca/biblioteca.component';
import { Routes, RouterModule } from '@angular/router';
const rutas: Routes = [
 { path: '', component: MainComponent },
 { path: 'biblioteca/:id/:id2', component: BibliotecaComponent}
];
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(rutas) ],
  declarations: [ AppComponent, NavComponent, FooterComponent, MainComponent, BibliotecaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
