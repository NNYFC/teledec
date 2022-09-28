import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import{ ApiserviceService}from './../apiservice.service';
@Component({
  selector: 'app-pageutilisateur',
  templateUrl: './pageutilisateur.component.html',
  styleUrls: ['./pageutilisateur.component.css']
})
export class PageutilisateurComponent implements OnInit {

  constructor(private router:Router,private loginAuth: ApiserviceService){ }

  ngOnInit(): void {
  }

}
