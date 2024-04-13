import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductshowcaseComponent } from './productshowcase/productshowcase.component';
import { PrelaoderComponent } from './prelaoder/prelaoder.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginComponent,
    NotfoundComponent,
    ProductshowcaseComponent,
    PrelaoderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
