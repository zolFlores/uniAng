import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { formPersonaComponent } from './personas/formPersona/formPersona.component';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guardian.service';


const CanActivateLogin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(LoginGuardian).CanActivateLogin();
};




const routes: Routes = [
  {path:'', component: PersonasComponent},
  {path:'personas', component: PersonasComponent,canActivate:[CanActivateLogin]},
  {path:'personas/agregar', component: formPersonaComponent, canActivate:[CanActivateLogin] },
  {path:'personas/:id',component: formPersonaComponent, canActivate:[CanActivateLogin]},
  {path:'login', component:LoginComponent},
  {path:'**',component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
