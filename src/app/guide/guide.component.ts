import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import{ ApiserviceService}from './../apiservice.service';
@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor(private router:Router,private loginAuth: ApiserviceService) { }

  ngOnInit(): void {
  }

}
