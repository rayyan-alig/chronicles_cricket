import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LiveMatchesComponent } from './live-matches/live-matches.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutComponent } from './about/about.component';
import { ConnectComponent } from './connect/connect.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'live-matches', component: LiveMatchesComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'connect', component: ConnectComponent },
  
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

