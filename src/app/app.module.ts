import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiserviceService } from './apiservice.service';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreerCompteComponent } from './creer-compte/creer-compte.component';

import { ForumComponent } from './forum/forum.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ContactComponent } from './contact/contact.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { PageadminComponent } from './pageadmin/pageadmin.component';


import { GuideComponent } from './guide/guide.component';
import { PageutilisateurComponent } from './pageutilisateur/pageutilisateur.component';
import { CompuilisateurComponent } from './compuilisateur/compuilisateur.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreerCompteComponent,

    ForumComponent,
    PaiementComponent,
    ContactComponent,
    DeclarationComponent,
    PageadminComponent,

    GuideComponent,
    PageutilisateurComponent,
    CompuilisateurComponent,
    ProfilComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
    ],
  providers: [
    ApiserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
