import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { formPersonaComponent } from './personas/formPersona/formPersona.component';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: PersonasComponent},
  {path:'personas', component: PersonasComponent},
  {path:'personas/agregar', component: formPersonaComponent },
  {path:'personas/:id',component: formPersonaComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
