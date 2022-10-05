import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient,private router: Router) { }

  baseServerUrl = 'http://localhost:8181/';


  logout(): void {
       sessionStorage.setItem('isLoggedIn', 'false');
       sessionStorage.removeItem('authvalue');
       sessionStorage.removeItem('emailvalue');
       sessionStorage.removeItem('passwordvalue');
       sessionStorage.removeItem('userTypevalue');

       sessionStorage.clear();
       this.router.navigate(['login']);
  }

  loginUser(username: any, password: any) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });

    return this.http.get(this.baseServerUrl + 'login/'+username, {
      headers,
    });
  }

  registerUser(Utilisateur:Array<any>) {

      const headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');

      return this.http.post(this.baseServerUrl + 'creer',
        {
          nom:Utilisateur[0],
          prenom:Utilisateur[1],
          email:Utilisateur[2],
          num_telephone:Utilisateur[3],
          fonction:Utilisateur[4],
          password:Utilisateur[5],
          ville:Utilisateur[6],
          commune:Utilisateur[7],
          quartier:Utilisateur[8],
          pays:Utilisateur[9]
        },{
            headers,
         }
      );
  }


  addTeledeclaration(username: any, password: any,Teledeclaration:Array<any>) {
      const headers = new HttpHeaders({
        Authorization: 'Basic ' + btoa(username + ':' + password),
      });

      return this.http.post(this.baseServerUrl + 'contribuable/teledeclaration',
       {
        regime_imposition:Teledeclaration[0],
        raison_social:Teledeclaration[1],
        exercice_fiscal:Teledeclaration[2],
        sigle_societe:Teledeclaration[3],
        num_quittance:Teledeclaration[4],
        penalite:Teledeclaration[5],
        id_personne:Teledeclaration[6]
       },
       {
        headers,
      });
  }

getAllAdmin(username: any, password: any) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });

    return this.http.get(this.baseServerUrl + 'admin', {
      headers,
    });
}


}

