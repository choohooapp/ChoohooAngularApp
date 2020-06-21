import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {LocalStorageService} from 'angular-2-local-storage';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})

export class PaymentsComponent implements OnInit {
    ResellerId: string;
    UserPayments: any;
    ItemsArray : any;
  constructor(public Api: ApiService ,  private localStorageService: LocalStorageService) {

  }

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
            },
            error => {
             console.log(error);
          });


    }
}
