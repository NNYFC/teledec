import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ApiserviceService} from './../apiservice.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
    loaderShow: boolean = false;
    timeLeft: number = 3;
    interval: any;
    response:any;
    userEmail: any;
    userPassword: any;
    userId:any;
    userType:any;
    messagesList:any=[];

  constructor(private router:Router,private loginAuth: ApiserviceService) { }

  ngOnInit(): void {

     this.userEmail = sessionStorage.getItem('emailvalue');
     this.userPassword = sessionStorage.getItem('passwordvalue');
     this.userId = sessionStorage.getItem('userId');
     this.userType = sessionStorage.getItem('userTypevalue');

     this.loaderShow = true;
     this.startTimer();

  }

  loginForm=new FormGroup({
      message:new FormControl('',[Validators.required])
    });

    get Message():FormControl{
      return this.loginForm.get('message') as FormControl;
    }

    loginProjet(): void {
      this.loginAuth
              .addTMessages(this.userEmail,this.userPassword,
                            [this.loginForm.value.message,this.userId]
                            ).subscribe((res) => {
                             this.response = res;
                             console.log(this.response);

                             this.loginAuth.getAllMessages(this.userEmail,this.userPassword)
                                  .subscribe((res) => {
                                                        this.messagesList = res;
                                                        console.log(this.messagesList);

                                                        this.pauseTimer();
                                                        this.loaderShow = false;

                                                      }
                             );

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
              this.loginAuth.getAllMessages(this.userEmail,this.userPassword)
                   .subscribe((res) => {
                                                this.messagesList = res;
                                                console.log(this.messagesList);

                                                this.pauseTimer();
                                                this.loaderShow = false;

                                         }
                   );
              this.timeLeft = 3;
              //this.loaderShow = false;
              //this.pauseTimer();
            }
          }, 50);
    }

   pauseTimer() {
          clearInterval(this.interval);
          this.startTimer();
   }

    exitApp() {
           this.loginAuth.logout();
     }

}
