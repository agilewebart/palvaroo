import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductshowcaseComponent } from './productshowcase/productshowcase.component';
import { authGuard } from './allguards/auth-guard.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: MainpageComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'allproducts', component: ProductshowcaseComponent
  },
  {
    path: 'admindashboard',
    canActivate: [authGuard],
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
  },
  {
    path: '**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
