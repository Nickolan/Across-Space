import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { DetailComponent } from './detail/detail.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListElementsComponent } from './list-elements/list-elements.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { SatelliteComponent } from './satellite/satellite.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PlanetFormComponent } from './planet-form/planet-form.component';
import { SatelliteFormComponent } from './satellite-form/satellite-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    DetailComponent,
    NotFoundComponent,
    ListElementsComponent,
    LoginFormComponent,
    SatelliteComponent,
    SignupFormComponent,
    AdminDashboardComponent,
    PlanetFormComponent,
    SatelliteFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
