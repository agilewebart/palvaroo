import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ProductConfigureComponent } from './product-configure/product-configure.component';
import { FormsModule } from '@angular/forms';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {
//   NgxUiLoaderModule,
//   NgxUiLoaderConfig,
//   SPINNER,
//   POSITION,
//   PB_DIRECTION,
// } from "ngx-ui-loader";


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



const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AdminDashboardComponent,
    ProductConfigureComponent,
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    FormsModule,
    NotifierModule.withConfig(customNotifierOptions),
    // NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxSpinnerModule,
    NgxUiLoaderModule
  ],
})
export class AdminDashboardModule { }
