import { Component,OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-buy-reseller',
  templateUrl: './buy-reseller.component.html',
  styleUrls: ['./buy-reseller.component.css']
})
export class BuyResellerComponent implements OnInit, OnDestroy {
  id: any;
  private sub: any;
  errorMessage:any
  details = {ResellerID: '', Name: '', AdminStatus: '',Type:"", units:""};
  constructor(private route: ActivatedRoute ,public Api :ApiService,) {}

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
}
