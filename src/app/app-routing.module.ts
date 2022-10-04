import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreerCompteComponent } from './creer-compte/creer-compte.component';
import { ForumComponent } from './forum/forum.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ContactComponent } from './contact/contact.component';
import { GuideComponent } from './guide/guide.component';
import { PageutilisateurComponent } from './pageutilisateur/pageutilisateur.component';
import { PageadminComponent } from './pageadmin/pageadmin.component';
import { CompuilisateurComponent } from './compuilisateur/compuilisateur.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { ProfilComponent } from './profil/profil.component';
import { ContribuableComponent } from './contribuable/contribuable.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'creer compte',
    component:CreerCompteComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'forum',
    component: ForumComponent
  },
  {
    path:'paiement',
    component:  PaiementComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'declaration',
    component: DeclarationComponent
  },
  {
    path:'page admin',
    component: PageadminComponent
  },
  {
    path:'guide',
    component: GuideComponent
  },
  {
    path:'page utilisateur',
    component: PageutilisateurComponent

  },
  {
    path:'compte utilisateur',
    component: CompuilisateurComponent
  },
  {
    path:'profil',
    component: ProfilComponent
  },

  {
    path:'contribuable',
    component: ContribuableComponent 
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
