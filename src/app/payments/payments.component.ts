import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {LocalStorageService} from 'angular-2-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})

export class PaymentsComponent implements OnInit {
    ResellerId: string;
    UserPayments: any;
    ItemsArray : any
    errorMessage :any;
    constructor(public router: Router,public Api :ApiService ,private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
      this.ResellerId = this.localStorageService.get('ResellerID');
    this.getResellerPayments();
  }

    getResellerPayments(){
        this.Api.getResellerPayments( this.ResellerId).subscribe(response => {
                if (response) {
                      console.log(response);
                }
                this.ItemsArray = response.person;
                if(this.ItemsArray.length < 1)
                {
                    this.errorMessage = 'You have no payments yet';
                }
            },
            error => {
             console.log(error);
          });


    }
    logout(){
      this.localStorageService.clearAll();
      this.router.navigate(['/login']);
  
     
      
      
    }
}
