import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickModule } from 'ngx-slick';
import { NgTippyModule } from 'angular-tippy';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/header/header/header.component';
import { TriangleComponent } from './components/triangle/triangle/triangle.component';
import { ScrollTextComponent } from './components/scrollText/scroll-text/scroll-text.component';
import { CardComponent } from './components/card/card.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { BlogCardComponent } from './components/blog-card/blog-card/blog-card.component';
import AOS from 'aos';
AOS.init();

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    TriangleComponent,
    ScrollTextComponent,
    CardComponent,
    BlogCardComponent
  ],
  imports: [
    BrowserModule,
    NgTippyModule,
    TooltipModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
