import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Book1Component } from './book1/book1.component';
import { Book2Component } from './book2/book2.component';

import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
// import { FilterPipe } from './pipes/filter.pipe';





@NgModule({
  declarations: [
    AppComponent,
    Book1Component,
    Book2Component,
    SidenavComponent,
    SearchComponent,
    // FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    ReactiveFormsModule,
    // FilterPipe
    
    // Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
