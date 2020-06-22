import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-gameunits-ad',
  templateUrl: './gameunits-ad.component.html',
  styleUrls: ['./gameunits-ad.component.css']
})
export class GameunitsAdComponent implements OnInit {
  errorMessage="";
  username =""
  showdf =false;
  pdfSrc =''
  amount =''
  showform= false;
  ItemsArray : any;
  details = {ResellerID: '', Name: '', AdminStatus: '',Type:""};
  constructor(public router: Router,public Api :ApiService ,private localStorageService: LocalStorageService) { }


  logout(){
    this.localStorageService.clearAll();
    this.router.navigate(['/login']);

   
    
    
  }

  ngOnInit(): void {
    this.getME()
  }


 getME(){

    this.Api.getPrice( ).subscribe(response => {
      if (response) {

       this. ItemsArray =  response.users;

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
  reset(){
this.showform = true;
  }


  setPrice(){

    if(this.amount ==""){
      this. errorMessage ="Please enter the amount"
    }
    if(this.amount){
      this. errorMessage ="";
      this.Api.setprice(this.amount).subscribe(response => {

        if(response.message =="created"){
          this. errorMessage ="Game Unit Price was Successfuly Changed"
          this.getME();
          this.showform=false;
        }
  
  },
      error => {
  
      
  
    if(error.status =="0"){
      this. errorMessage ="Service Unavaliable"
     }
        
        });
      }
    }
   

cancel(){
  this.showform = false;
}


}
