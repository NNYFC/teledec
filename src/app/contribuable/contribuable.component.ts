import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiserviceService} from './../apiservice.service';

@Component({
  selector: 'app-contribuable',
  templateUrl: './contribuable.component.html',
  styleUrls: ['./contribuable.component.css']
})
export class ContribuableComponent implements OnInit {
  userType:any;
    loaderShow: boolean = false;
    timeLeft: number = 15;
    interval: any;
    response:any;
    userEmail: any;
    userPassword: any;
    userId:any;
    contribuableList:any=[];

  constructor(private router:Router,private loginAuth: ApiserviceService) { }

  ngOnInit(): void {
      this.loaderShow = true;
               this.userEmail = sessionStorage.getItem('emailvalue');
               this.userPassword = sessionStorage.getItem('passwordvalue');
               this.userId = sessionStorage.getItem('userId');
               this.loginAuth.getAllContribuable(this.userEmail,this.userPassword)
               .subscribe((res) => {
                                     this.contribuableList = res;

                                     this.pauseTimer();
                                     this.loaderShow = false;

                                  });
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

  exitApp() {
        this.loginAuth.logout();
  }

}
