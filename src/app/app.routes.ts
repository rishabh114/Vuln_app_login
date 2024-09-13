import { Routes } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormPageComponent } from './form-page/form-page.component';
import { InputPageComponent } from './input-page/input-page.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginSignupComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'form', component: FormPageComponent },
  { path: 'input', component: InputPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirect to login if no route is specified
  { path: '**', redirectTo: '/login' }  // Wildcard route redirects to login if no match is found
];
