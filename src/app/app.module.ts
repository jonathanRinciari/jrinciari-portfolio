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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import AOS from 'aos';
import { AppRoutingModule } from './app-routing.module';
import { WritingOverviewComponent } from './pages/writing-overview/writing-overview.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './httpClientInterceptor';

AOS.init();

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    TriangleComponent,
    ScrollTextComponent,
    CardComponent,
    BlogCardComponent,
    WritingOverviewComponent
  ],
  imports: [
    BrowserModule,
    NgTippyModule,
    TooltipModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    SlickModule.forRoot(),
    MatSidenavModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
