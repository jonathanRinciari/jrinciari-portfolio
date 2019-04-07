import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickModule } from 'ngx-slick';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/header/header/header.component';
import { TriangleComponent } from './components/triangle/triangle/triangle.component';
import { ScrollTextComponent } from './components/scrollText/scroll-text/scroll-text.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    TriangleComponent,
    ScrollTextComponent
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
