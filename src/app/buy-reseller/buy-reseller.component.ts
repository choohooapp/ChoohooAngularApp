import { Component,OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { IfStmt } from '@angular/compiler';
import {map} from 'rxjs/internal/operators';


@Component({
  selector: 'app-buy-reseller',
  templateUrl: './buy-reseller.component.html',
  styleUrls: ['./buy-reseller.component.css']
})
export class BuyResellerComponent implements OnInit, OnDestroy {
  id: any;
  private sub: any;
  errorMessage:any;
   UnitPurchase:number;
   UnitPurchaseTotal:number;
    showBuycredits:boolean;
    showCreditsReview:boolean;
    DateTimeNow : any;
    VatAmount: number;
    TotalAmount:number;
    PaymentMethod:string;
  details = {ResellerID: '', Name: '', AdminStatus: '',Type:"", units:"" , Country:'' , City:'' , Email:'' , Cellphone : ''};
  constructor(private route: ActivatedRoute ,public Api :ApiService,) {
    this.UnitPurchase = 0.00;
    this.UnitPurchaseTotal = this.UnitPurchase * 50;
    this.showBuycredits = true;
    this.DateTimeNow = new Date();
    this.VatAmount = 150;
    this.TotalAmount = this.UnitPurchaseTotal = this.UnitPurchase * 50;
    this.PaymentMethod = '';
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
      // console.log(this.id)  ;
       this.route.params.subscribe( params => 
        
        this.id = params.id);
        console.log(params.id) 
       
       
       
       // In a real app: dispatch action to load the details here.
    });

  if(this.id ==""){

  }else{
    this.getReseller();
  }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getReseller(){
    this.errorMessage="";
  

      this.Api.findReseller( this.id).subscribe(response => {
  
        if(response.message =="notfound"){
  
        this.errorMessage=" No Reseller Profile";
        }
  
        if (response) {

      this.details.ResellerID = response.person.ResellerID;
      this.details.Name = response.person.Name;
      this.details.AdminStatus = response.person.ApplicationStatus;
      this.details.units = response.person.units;
      this.details.Country = response.person.Country
      this.details.City = response.person.City;
      this.details.Email = response.person.Email;
      this.details.Cellphone = response.person.Mobilenumber;

      if(this.details.AdminStatus ==="0"){
        this.details.AdminStatus = "Pending"
        //this.buybtn = false
      }
      if(this.details.AdminStatus ==="Approved"){
    
       // this.buybtn = true
      }
      this.details.Type = response.person.Type;
       }
  
       
    
      
  },
      error => {
  
      
    if(error.status =="401"){
     this. errorMessage ="Incorrect Verification Code"
    }
    if(error.status =="0"){
      this. errorMessage ="Service Unavaliable"
     }
        
        });
  
      
    }

    IncreaseUnitPurchase()
    {
      this.UnitPurchase ++;
      this.UnitPurchaseTotal = this.UnitPurchase * 50;
        this.TotalAmount = this.UnitPurchaseTotal ;
    }

    DecreaseUnitPurchase(){
      this.UnitPurchase --;
      this.UnitPurchaseTotal = this.UnitPurchase * 50;
        this.TotalAmount = this.UnitPurchaseTotal ;
    }
    gotoReview()
    {
      if(this.UnitPurchase < 1)
      {
        return;
      }
      this.showCreditsReview = true;
      this.showBuycredits = false;
    }
    gotoPayment()
    {

        const Units = this.UnitPurchase * 50.00;
        const data = {
            name_first: this.details.Name,
            name_last: this.details.ResellerID,
            email_address: this.details.Email,
            cell_number: this.details.Cellphone,
            item_name: Units,
            item_description: Units +  ' Units',
            amount: this.TotalAmount,
            m_payment_id: this.details.ResellerID,
            payment_method:this.PaymentMethod,
        }
        const myJSON = encodeURIComponent(JSON.stringify(data));
        console.log(data);
        window.open('http://royallez.co.za/test/checkout.php?data=' + myJSON, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');


    }

}
