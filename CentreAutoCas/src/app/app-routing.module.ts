import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { MentionComponent } from './mention/mention.component';
import { ConditionComponent } from './condition/condition.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PolitiqueComponent } from './politique/politique.component';
import { PlanComponent } from './plan/plan.component';
import { AproposComponent } from './apropos/apropos.component';
import { LoginComponent} from "./login/login.component";

const routes: Routes = [
  // { path: 'accueil', redirectTo: , pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'conditionGenerales', component: ConditionComponent },
  { path: 'mention', component: MentionComponent },
  { path: 'politique', component: PolitiqueComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'Apropos', component: AproposComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
