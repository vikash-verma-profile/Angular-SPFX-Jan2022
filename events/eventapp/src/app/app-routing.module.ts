import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventsComponent } from "./events/events.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGaurd } from "./services/auth.gaurd";
import { AuthService } from "./services/auth.service";
import { SpecialEventsComponent } from "./special-events/special-events.component";

const routes: Routes = [
  { path: "", redirectTo: "/events",pathMatch:"full"},
  {
    path: "events",
    component: EventsComponent,
  },
  {
    path:'special',
    canActivate:[AuthGaurd],
    component:SpecialEventsComponent
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
