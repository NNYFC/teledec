import { Component, OnInit } from '@angular/core';
import{ FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService }from './../apiservice.service';

@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css']
})
export class CreerCompteComponent implements OnInit {
  userEmail:any;
  loaderShow: boolean = false;
  timeLeft: number = 15;
  interval: any;
  response:any;

  constructor(private router:Router,private loginAuth: ApiserviceService) { }

  ngOnInit(): void {
  }

  creeCompteForm=new FormGroup({
      nom:new FormControl('',[
         Validators.required,
         Validators.minLength(4),
         Validators.maxLength(15),
      ]),
      prenom:new FormControl('',[
               Validators.required,
               Validators.minLength(4),
               Validators.maxLength(15),
      ]),
      telephone:new FormControl('',[
               Validators.required,
               Validators.minLength(4),
               Validators.maxLength(15),
      ]),
      fonction:new FormControl('',[
                     Validators.required,
                     Validators.minLength(4),
                     Validators.maxLength(15),
      ]),
      ville:new FormControl('',[
                     Validators.required,
                     Validators.minLength(4),
                     Validators.maxLength(15),
      ]),
      commune:new FormControl('',[
                     Validators.required,
                     Validators.minLength(4),
                     Validators.maxLength(15),
      ]),
      quartier:new FormControl('',[
                     Validators.required,
                     Validators.minLength(4),
                     Validators.maxLength(15),
      ]),
      pays:new FormControl('',[
                     Validators.required,
                     Validators.minLength(4),
                     Validators.maxLength(15),
      ]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      confirmpassword:new FormControl('',[
              Validators.required,
              Validators.minLength(4),
              Validators.maxLength(15),
      ])
    });

  get Nom():FormControl{
      return this.creeCompteForm.get('nom') as FormControl;
  }

  get Prenom():FormControl{
      return this.creeCompteForm.get('prenom') as FormControl;
  }

  get Telephone():FormControl{
      return this.creeCompteForm.get('telephone') as FormControl;
  }

  get Ville():FormControl{
        return this.creeCompteForm.get('ville') as FormControl;
  }

  get Commune():FormControl{
        return this.creeCompteForm.get('commune') as FormControl;
  }

  get Quartier():FormControl{
        return this.creeCompteForm.get('quartier') as FormControl;
  }

  get Pays():FormControl{
        return this.creeCompteForm.get('pays') as FormControl;
  }

  get Email():FormControl{
      return this.creeCompteForm.get('email') as FormControl;
  }

  get password(): FormControl{
      return this.creeCompteForm.get('password') as FormControl;
  }

  get Confirmpassword(): FormControl{
        return this.creeCompteForm.get('confirmpassword') as FormControl;
  }

  createCompteProjet(): void {
      this.loginAuth
              .registerUser([
                this.creeCompteForm.value.nom,this.creeCompteForm.value.prenom,
                this.creeCompteForm.value.email,this.creeCompteForm.value.telephone,
                this.creeCompteForm.value.fonction,this.creeCompteForm.value.password,
                this.creeCompteForm.value.ville,this.creeCompteForm.value.commune,
                this.creeCompteForm.value.quartier,this.creeCompteForm.value.pays
              ])
              .subscribe((res) => {
                             this.response = res;
                             console.log(this.response);

                             this.pauseTimer();
                             this.loaderShow = false;

                             this.router.navigate(['login']);

                            },error => {
                             if(error.status==0){
                                         this.response = "Please Check your Internet Connection !";
                             }
                             if(error.status==401){
                                         this.response = "Wrong Email or Password!";
                             }

                             this.pauseTimer();
                             this.loaderShow = false;
                          }

              );
    }

    startTimer() {
          this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
              this.timeLeft--;
            } else {
              this.timeLeft = 15;
              this.loaderShow = false;
              this.pauseTimer();
            }
          }, 1500);
    }

   pauseTimer() {
          clearInterval(this.interval);
   }

}
