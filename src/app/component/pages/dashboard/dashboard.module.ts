import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,ActivatedRoute,Router,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotUrlComponent } from './../../../not-url/not-url.component';
import { ForoComponent } from './foro/foro.component';

export const routes:Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'foro',component:ForoComponent},
    {path:'**',component:NotUrlComponent}
]
@NgModule({
    declarations:[
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ForoComponent
    ],
    exports:[
    HomeComponent,
    HeaderComponent,
    FooterComponent
    ],
    imports:[
      CommonModule,
      RouterModule  
    ],
})
export class DashboardModule{}