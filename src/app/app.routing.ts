import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './recipe/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {RegisterComponent} from './register/register/register.component';
import {SearchComponent} from './search/search/search.component';
import {CreateComponent} from './create/create/create.component';

const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'recipe/:id',     component: ProfileComponent },
    { path: 'login',           component: SignupComponent },
    { path: 'search',           component: SearchComponent },
    { path: 'register',           component: RegisterComponent },
    { path: 'create',          component: CreateComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
