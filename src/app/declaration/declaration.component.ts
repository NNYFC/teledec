import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import{ ApiserviceService}from './../apiservice.service';
@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit {
  userType:any;
  loaderShow: boolean = false;
  timeLeft: number = 15;
  interval: any;
  response:any;
  userEmail: any;
  userPassword: any;
  userId:any;

  constructor(private router:Router,private loginAuth: ApiserviceService) { }

  ngOnInit(): void {
    this.userEmail = sessionStorage.getItem('emailvalue');
    this.userPassword = sessionStorage.getItem('passwordvalue');
    this.userId = sessionStorage.getItem('userId');
  }

  loginForm=new FormGroup({
      regime_imposition:new FormControl('',[Validators.required]),
      raison_social:new FormControl('',[Validators.required]),
      exercice_fiscal:new FormControl('',[Validators.required]),
      sigle_societe:new FormControl('',[Validators.required]),
      num_quittance:new FormControl('',[Validators.required]),
      penalite:new FormControl('',[Validators.required])
    });

    get Regime_imposition():FormControl{
      return this.loginForm.get('regime_imposition') as FormControl;
    }

    get Raison_social(): FormControl{
      return this.loginForm.get('raison_social') as FormControl;
    }

    get Sigle_societe(): FormControl{
       return this.loginForm.get('sigle_societe') as FormControl;
    }

    get Num_quittance(): FormControl{
       return this.loginForm.get('num_quittance') as FormControl;
    }

    get Penalite(): FormControl{
       return this.loginForm.get('penalite') as FormControl;
    }

    loginProjet(): void {
      this.loginAuth
              .addTeledeclaration(this.userEmail,this.userPassword,[
                this.loginForm.value.regime_imposition,this.loginForm.value.raison_social,
                this.loginForm.value.exercice_fiscal,this.loginForm.value.sigle_societe,
                this.loginForm.value.num_quittance,this.loginForm.value.penalite,this.userId
              ]
              ).subscribe((res) => {
                             this.response = res;
                             console.log(this.response);

                             this.pauseTimer();
                             this.loaderShow = false;
                             location.reload();
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
