import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemFormComponent } from './components/item-form/item-form.component';

@NgModule({
  declarations: [
    AppComponent,        
    ItemListComponent,   
    ItemFormComponent    
  ],
  imports: [
    BrowserModule,       
    AppRoutingModule,    
    HttpClientModule,    
    FormsModule,
    RouterModule      
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }