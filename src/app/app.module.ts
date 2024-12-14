import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Blog1Component } from './blogs/blog1/blog1.component';
import { Blog2Component } from './blogs/blog2/blog2.component';
import { ConnectComponent } from './connect/connect.component';
import { LiveMatchesComponent } from './live-matches/live-matches.component';
import { Blog3Component } from './blogs/blog3/blog3.component';
import { Blog4Component } from './blogs/blog4/blog4.component';
import { Blog5Component } from './blogs/blog5/blog5.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogsComponent,
    AboutComponent,
    NavbarComponent,
    Blog1Component,
    Blog2Component,
    ConnectComponent,
    LiveMatchesComponent,
    Blog3Component,
    Blog4Component,
    Blog5Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
