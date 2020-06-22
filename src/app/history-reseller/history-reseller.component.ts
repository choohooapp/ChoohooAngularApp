import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-reseller',
  templateUrl: './history-reseller.component.html',
  styleUrls: ['./history-reseller.component.css']
})
export class HistoryResellerComponent implements OnInit {
  errorMessage="";
  username =""
  showbuy = false;
  buybtn = false;
  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1;
total  =0;
showSuccess = false;
  number  :any
  price  : any;

  ItemsArray : any;
  details = {ResellerID: '', Name: '', AdminStatus: '',Type:"", units:""};

pays :any
  paypal ={ Type:"",
    Name: "",
    Surname:"",
    Email:"",
    method: "" ,
    units:"",
     Country:"",
     transcationID:"",
      price:"", 
      ResellerID:"",}
      constructor(public router: Router,public Api :ApiService ,private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.getME()

  }


 getME(){
  this.errorMessage="";

 this.username = this.localStorageService.get('ResellerID');
    this.Api.history( this.username).subscribe(response => {
      if (response) {

        this. ItemsArray =  response.person;

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
  Buy(){
    this.showbuy =true;
    this.getprice()
  }
  dontBuy(){
    this.showbuy =false; 
    this.total =0
    this.price =0
    this.number = 0
  }



  getprice(){

    this.Api.getPrice( ).subscribe(response => {
      if (response) {

       this. ItemsArray =  response.users;
       this.price = this. ItemsArray[0].price

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
  logout(){
    this.localStorageService.clearAll();
    this.router.navigate(['/login']);

   
    
    
  }

}
