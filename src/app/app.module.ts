import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import {  routes as childRoutes, DashboardModule } from './component/pages/dashboard/dashboard.module';
import { AuthServiceService } from './auth-service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { isLogged } from './service.canActivate';
import { NotUrlComponent } from './not-url/not-url.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, children:childRoutes, canActivate: [isLogged]},
  {path:'**',component:NotUrlComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotUrlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    DashboardModule,
    ReactiveFormsModule,
    LocalStorageModule.withConfig({
            prefix: 'foro-app',
            storageType: 'localStorage'
        })
  ],
  providers: [AuthServiceService,isLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
