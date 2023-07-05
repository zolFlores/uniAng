import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { formPersonaComponent } from './personas/formPersona/formPersona.component';
import { LoggingService } from './LoggingService.service';
import { PersonaService } from './Persona.service';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { DataServices } from './dataServices';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.services';
import { LoginGuardian } from './login/login-guardian.service';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ResultadoComponent,
    PersonaComponent,
    formPersonaComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoggingService,
    PersonaService,
    DataServices,
    LoginGuardian,
    LoginService],
  bootstrap: [AppComponent]
})

export class AppModule { }
