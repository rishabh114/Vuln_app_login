import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormPageComponent } from './form-page/form-page.component';
import { InputPageComponent } from './input-page/input-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { appRoutes } from './app.routes';
import { FileExtractorComponent } from './file-extractor/file-extractor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    WelcomeComponent,
    FormPageComponent,
    InputPageComponent,
    UserProfileComponent,
    FileExtractorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule // Add FormsModule here
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
