import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { IfStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { Router } from '@angular/router';
declare let paypal: any;
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  errorMessage="";
  username =""
  showbuy = false;
  buybtn = false;
  showme = false;
  addScript: boolean = false;
  paypalLoad: boolean = true;
  public loading: boolean = true;
  finalAmount: number = 1;
total  : number =0;
showSuccess = false;
  number  :any
  price  : any;
  public payPalConfig?: IPayPalConfig;
  ItemsArray : any;
  details = {ResellerID: '', Name: '', AdminStatus: '',Type:"", units:""};
  public didPaypalScriptLoad: boolean = false;
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

 this.username = this.localStorageService.get('ID');
    this.Api.findme( this.username).subscribe(response => {

      if(response.message =="notfound"){

      this.errorMessage="You have no Reseller Profile";
      }



      if (response) {

   

    this.details.ResellerID = response.person.ResellerID;
    this.details.Name = response.person.Name;
    this.details.AdminStatus = response.person.ApplicationStatus;
    this.details.units = response.person.units;
    if(this.details.AdminStatus ==="0"){
      this.details.AdminStatus = "Pending"
      this.buybtn = false
    }
    if(this.details.AdminStatus ==="Approved"){
  
      this.buybtn = true
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
  somethingChanged(): void {  

this.total = this.price*this.number;

if(!this.didPaypalScriptLoad) {
  this.loadPaypalScript().then(() => {
    paypal.Button.render(this.paypalConfig, '#paypal-button');
    this.loading = false;
  });
}

  }
  // paypalConfig = {
  //   env: 'sandbox',
  //   client: {
  //     sandbox: 'AUKqx7if_vqq7enbgMGt-gYvrtdGnMjQh8_uq69HUrtOmIAOsoGmdVVlchQ-34zBI-0L5oSQ2UhvZCJX',
   
  //   },
  //   commit: true,
  //   payment: (data, actions) => {
  //     return actions.payment.create({
  //       payment: {
  //         transactions: [
  //           { amount: { total: this.total, currency: 'USD' } }
  //         ]
  //       }
  //     });
  //   },
  //   onAuthorize: (data, actions) => {
  //     return actions.payment.execute().then((payment) => {
  //       //Do something when payment is successful.
       
  //       if(payment.id){
  //         console.log(payment);
  //         this.paypal.ResellerID =this.details.ResellerID
  //       this.paypal.Type="paypal"
  //       this.paypal.Name =payment.payer.payer_info.first_name
  //       this.paypal.Surname =payment.payer.payer_info.last_name
  //       this.paypal.Email =payment.payer.payer_info.email
  //       this.paypal.method ="paypal";
  //       this.paypal.units  =this.total.toString();
  //       this.paypal.Country =payment.payer.payer_info.country_code;
  //       this.paypal.transcationID = payment.id;
  //       this.paypal.price  =this.total.toString();
  //      this.buy();
  //       }

        
  //     })
  //   }
  // };
 
  // public ngAfterViewChecked(): void {
  //   if(!this.didPaypalScriptLoad) {
  //     this.loadPaypalScript().then(() => {
  //       paypal.Button.render(this.paypalConfig, '#paypal-button');
  //       this.loading = false;
  //     });
  //   }
  // }

  // public loadPaypalScript(): Promise<any> {
  //   this.didPaypalScriptLoad = true;
  //   return new Promise((resolve, reject) => {
  //     const scriptElement = document.createElement('script');
  //     scriptElement.src = 'https://www.paypalobjects.com/api/checkout.js';
  //     scriptElement.onload = resolve;
  //     document.body.appendChild(scriptElement);
  //   });
  // }

  public paypalConfig: any = {
    env: 'sandbox',
    client: {
      sandbox: 'AUKqx7if_vqq7enbgMGt-gYvrtdGnMjQh8_uq69HUrtOmIAOsoGmdVVlchQ-34zBI-0L5oSQ2UhvZCJX',
      // production: 'xxxxxxxxxx'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.total, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        if(payment.id){
                  console.log(payment);
                  this.paypal.ResellerID =this.details.ResellerID
                this.paypal.Type="paypal"
                this.paypal.Name =payment.payer.payer_info.first_name
                this.paypal.Surname =payment.payer.payer_info.last_name
                this.paypal.Email =payment.payer.payer_info.email
                this.paypal.method ="paypal";
                this.paypal.units  =this.total.toString();
                this.paypal.Country =payment.payer.payer_info.country_code;
                this.paypal.transcationID = payment.id;
                this.paypal.price  =this.total.toString();
               this.buy();
                }
      });
    }
  };

  public ngAfterViewChecked(): void {
 
  }

  public loadPaypalScript(): Promise<any> {
    this.didPaypalScriptLoad = true;
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }








  buy(){
    this.errorMessage="";
  
   this.username = this.localStorageService.get('ID');
      this.Api.buyUnits( this.paypal).subscribe(response => {
  
  
  
       console.log(response.message);
        if (response.message =="created" ) {
  
          this.errorMessage="You have Successfuly purchased "+this.total+"GAME UNITS";
          this. ItemsArray =  '';
          location.reload();

  
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
