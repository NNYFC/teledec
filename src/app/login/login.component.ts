import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import{ ApiserviceService}from './../apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userEmail: any;
  userPassword: any;
  userType:any;
  loaderShow: boolean = false;
  timeLeft: number = 15;
  interval: any;
  response:any;

  constructor(private router:Router,private loginAuth: ApiserviceService) { }

  ngOnInit(): void {
  }

 loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
    ]),
  });

  get Email():FormControl{
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl{
    return this.loginForm.get('password') as FormControl;
  }

  loginProjet(): void {
    this.loginAuth
            .loginUser(this.loginForm.value.email,this.loginForm.value.password)
            .subscribe((res) => {
                           this.response = res;
                           console.log(this.response);

                           this.userEmail = this.loginForm.value.email;
                           this.userPassword = this.loginForm.value.password;
                           sessionStorage.setItem('emailvalue', this.userEmail);
                           sessionStorage.setItem('passwordvalue', this.userPassword);

                           this.userType = this.response.id_role.nom;
                           sessionStorage.setItem('userTypevalue', this.userType);

                           sessionStorage.setItem('userId',this.response.id);

                           this.pauseTimer();
                           this.loaderShow = false;

                           if(this.response.id_role.nom == 'CONTRIBUABLE'){
                            this.router.navigate(['declaration']);
                           }

                           if(this.response.id_role.nom == 'ADMIN'){
                                this.router.navigate(['page admin']);
                           }


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

