import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages-admin/dashboard/dashboard.component';
import { ProductsComponent } from './pages-admin/products/products.component';
import { StatisticsComponent } from './pages-admin/statistics/statistics.component';
import { CoupensComponent } from './pages-admin/coupens/coupens.component';
import { PagesComponent } from './pages-admin/pages/pages.component';
import { MediaComponent } from './pages-admin/media/media.component';
import { SettingsComponent } from './pages-admin/settings/settings.component';
import { LoginComponent } from './pages/login/login.component';
import { BodyComponent } from './pages-admin/body/body.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages-admin/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthAdminGuard } from './services/guard/auth-admin.guard';
import { ProfileAdminComponent } from './pages-admin/profile-admin/profile-admin.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },

  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'body', component: BodyComponent},
  {path: 'register', component: RegisterComponent},

  



  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent},

  {
    path:'admin',
    component:AdminComponent, canActivate:[AuthAdminGuard],
    children:[
      {
        path : 'dashboard',
        component : DashboardComponent,
      },
      {
        path : 'profile-admin',
        component : ProfileAdminComponent,
      },
      {
        path : 'products',
        component : ProductsComponent,
      },
      {
        path : 'statistics',
        component : StatisticsComponent,
      },
      {
        path : 'user',
        component : CoupensComponent,
      },
      {
        path : 'pages',
        component : PagesComponent,
      },
      {
        path : 'media',
        component : MediaComponent,
      },
      {
        path : 'settings',
        component : SettingsComponent,
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  
}
