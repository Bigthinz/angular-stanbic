import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes ,RouterModule} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { LoginComponent} from './login.component';
import { SignupComponent} from './signup.component';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },

  {
    path:'signup',
    component: SignupComponent
  }
]


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, SignupComponent ],
  bootstrap:    [ AppComponent ],
  exports:[RouterModule]
})
export class AppModule { 

  
}
