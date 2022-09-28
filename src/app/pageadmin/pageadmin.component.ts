import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import{ ApiserviceService}from './../apiservice.service';
@Component({
  selector: 'app-pageadmin',
  templateUrl: './pageadmin.component.html',
  styleUrls: ['./pageadmin.component.css']
})
export class PageadminComponent implements OnInit {

  constructor(private router:Router,private loginAuth: ApiserviceService) { }

  ngOnInit(): void {
  }

}
