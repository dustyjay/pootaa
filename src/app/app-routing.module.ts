import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { BecomePootaaComponent } from "./become-pootaa/become-pootaa.component";
import { HireSuccessComponent } from "./hire-success/hire-success.component";
import { HirePootaaComponent } from "./hire-pootaa/hire-pootaa.component";
import { PackageListingsComponent } from "./package-listings/package-listings.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "auth",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "become-a-pootaa",
        component: BecomePootaaComponent
      }
    ]
  },
  {
    path: "hire-a-pootaa",
    component: HirePootaaComponent
  },
  {
    path: "hire-success",
    component: HireSuccessComponent
  },
  {
    path: "listings",
    component: PackageListingsComponent
  },
  {
    path: "*",
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
