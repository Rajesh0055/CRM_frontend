import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
// import { SignupComponent } from './components/sign-up/sign-up.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },            // Route for login page
    // { path: 'signup', component: SignupComponent },   
    { path: '', component: IndexComponent }, 
    { path: 'register', component: RegisterComponent },     // Route for sign-up page
  {path:'reset' ,component:ResetPasswordComponent}
  ];
