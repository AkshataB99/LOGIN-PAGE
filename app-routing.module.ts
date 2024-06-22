import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterPageComponent } from './login/register-page/register-page.component';

const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // { path: 'register', component: RegisterPageComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  // { path: '**', redirectTo: '/login' }, // Handle other routes
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
