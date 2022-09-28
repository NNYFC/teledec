import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import{ ApiserviceService}from './../apiservice.service';
@Component({
  selector: 'app-compuilisateur',
  templateUrl: './compuilisateur.component.html',
  styleUrls: ['./compuilisateur.component.css']
})
export class CompuilisateurComponent implements OnInit {

  constructor(private router:Router,private loginAuth: ApiserviceService) { }

  ngOnInit(): void {
  }

}
