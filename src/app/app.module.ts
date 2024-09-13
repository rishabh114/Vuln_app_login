import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormPageComponent } from './form-page/form-page.component';
import { InputPageComponent } from './input-page/input-page.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    WelcomeComponent,
    FormPageComponent,
    InputPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule // Add FormsModule here
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
