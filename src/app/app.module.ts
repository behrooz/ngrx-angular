import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignUpComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    RouterModule.forRoot([
      { path: 'log-in', component: LogInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '', component: LandingComponent },
      { path: '**', redirectTo: '/' }
    ]),    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
