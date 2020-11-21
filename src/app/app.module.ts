import { JwtInterceptor } from './services/jwt.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponentComponent } from './components/auth-component/auth-component.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { UsersComponentComponent } from './components/users-component/users-component.component';
import { ServicesComponentComponent } from './components/services-component/services-component.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponentComponent,
    NavbarComponentComponent,
    UsersComponentComponent,
    ServicesComponentComponent,
    MenuComponentComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:JwtInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
