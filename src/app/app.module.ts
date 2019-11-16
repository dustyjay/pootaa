import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutComponent } from "./about/about.component";
import { CitiesComponent } from "./cities/cities.component";
import { ContactComponent } from "./contact/contact.component";
import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { BecomePootaaComponent } from "./become-pootaa/become-pootaa.component";
import { HireSuccessComponent } from "./hire-success/hire-success.component";
import { TestComponent } from "./test.component";
import { HirePootaaComponent } from './hire-pootaa/hire-pootaa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    CitiesComponent,
    ContactComponent,
    AuthLayoutComponent,
    RegisterComponent,
    LoginComponent,
    BecomePootaaComponent,
    HireSuccessComponent,
    TestComponent,
    HirePootaaComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
