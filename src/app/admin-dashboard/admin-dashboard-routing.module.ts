import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ProductConfigureComponent } from './product-configure/product-configure.component';
import { EnquirylistComponent } from './enquirylist/enquirylist.component';
import { authGuard } from '../allguards/auth-guard.guard';
const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'productconfig',
        canActivate: [authGuard],
        component: ProductConfigureComponent
      },
      {
        path: 'enquirylist',
        canActivate: [authGuard],
        component: EnquirylistComponent
      }

    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
