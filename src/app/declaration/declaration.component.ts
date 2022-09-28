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

  constructor(private router:Router,private loginAuth: ApiserviceService) { }

  ngOnInit(): void {
  }

}
