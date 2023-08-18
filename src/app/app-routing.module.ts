import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DetailComponent } from './detail/detail.component';
import { SatelliteComponent } from './satellite/satellite.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/:planetName',
    component: DetailComponent
  },
  {
    path: 'admin/access',
    component: LoginFormComponent,
  },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'satellite/:satelliteName',
    component: SatelliteComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
