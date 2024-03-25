import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { authGuardLogged, authGuardNotLogged } from './auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [authGuardLogged],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: NavigationPanelComponent,
    canActivate: [authGuardNotLogged],
  },
  { path: '**', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
