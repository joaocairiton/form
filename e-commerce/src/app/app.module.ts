import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages-admin/admin/admin.component';
import { SidenavComponent } from './pages-admin/sidenav/sidenav.component';
import { DashboardComponent } from './pages-admin/dashboard/dashboard.component';
import { ProductsComponent } from './pages-admin/products/products.component';
import { StatisticsComponent } from './pages-admin/statistics/statistics.component';
import { CoupensComponent } from './pages-admin/coupens/coupens.component';
import { PagesComponent } from './pages-admin/pages/pages.component';
import { MediaComponent } from './pages-admin/media/media.component';
import { SettingsComponent } from './pages-admin/settings/settings.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SublevelMenuComponent } from './pages-admin/sidenav/sublevel-menu.component';
import { HeaderComponent } from './pages-admin/components/header/header.component';

import { OverlayModule } from '@angular/cdk/overlay'
import { CdkMenuModule } from '@angular/cdk/menu';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { BodyComponent } from './pages-admin/body/body.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component'
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './services/interceptor/auth.interceptor';
import { ProfileAdminComponent } from './pages-admin/profile-admin/profile-admin.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    SublevelMenuComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    BodyComponent,
    NavbarComponent,
    RegisterComponent,
    ProfileAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
