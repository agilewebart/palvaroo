import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductshowcaseComponent } from './productshowcase/productshowcase.component';
import { PrelaoderComponent } from './prelaoder/prelaoder.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {
//   NgxUiLoaderModule,
//   NgxUiLoaderConfig,
//   SPINNER,
//   POSITION,
//   PB_DIRECTION,
//   NgxUiLoaderRouterModule,
//   NgxUiLoaderHttpModule
// } from 'ngx-ui-loader';



// const ngxUiLoaderConfig: NgxUiLoaderConfig = {
//   bgsColor: "red",
//   bgsPosition: POSITION.bottomCenter,
//   bgsSize: 40,
//   bgsType: SPINNER.rectangleBounce, // background spinner type
//   fgsType: SPINNER.chasingDots, // foreground spinner type
//   pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
//   pbThickness: 5, // progress bar thickness
// };

import { NgxUiLoaderModule } from 'ngx-ui-loader';



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
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxSpinnerModule,
    // NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
