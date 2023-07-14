import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Book1Component } from './book1/book1.component';
import { Book2Component } from './book2/book2.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {path:'', component:Book1Component},
  {path:'book2', component:Book2Component},
  {path:'', component:SidenavComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
