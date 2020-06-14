import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fgt',
  templateUrl: './fgt.component.html',
  styleUrls: ['./fgt.component.css']
})
export class FgtComponent implements OnInit {
  mylogin = {username: '', stationID: '', password: ''};
  errorMessage =""
  showform = false;
  hideme = true;
  squestion = '';
  answer = '';
  email ="";
  showlogin = false;
  showpwd = false;
  constructor(public Api :ApiService,  public router: Router) { }

  ngOnInit(): void {
  }

  showPWD(){
    this.router.navigate(['/fgt']);

  }
  reset(){
    this.squestion =""
    this. errorMessage ="";
    this.Api.reset(this.mylogin.username, this.mylogin.password).subscribe(response => {

      //console.log(response);
      if (response.respond.squestion) {
        this.squestion =response.respond.squestion;
        this.answer = response.respond.answer;
        this.email = this.mylogin.username;

     this.showform = true;
     this.hideme = false;
     } else  {
    //  this.errorMessage = response. errorList[0].description;
    //     this.setErrorMessage(this.errorMessage);
      }
},
    error => {

    
  if(error.status =="401"){
   this. errorMessage ="Account not found"
  }
  if(error.status =="0"){
    this. errorMessage ="Service Unavaliable"
   }
      
      });
    }
    check(){
      this. errorMessage = "";
      if(this.answer == this.mylogin.username){


        this. errorMessage ="";
        this.Api.sendverifyCode(this.email, this.mylogin.password).subscribe(response => {
    
        
          if (response.message .includes("sent")) {
            console.log(response.message);
           this.showform = false;
            this.hideme = false;
            this.showpwd =true;
            this. errorMessage ="Verification Code has been sent to your email"

         } else  {
        //  this.errorMessage = response. errorList[0].description;
        //     this.setErrorMessage(this.errorMessage);
          }
    },
        error => {
    
        
      if(error.status =="401"){
       this. errorMessage ="Account not found"
      }
      if(error.status =="0"){
        this. errorMessage ="Service Unavaliable"
       }
          
          });

      }else{
        this. errorMessage ="Incorrect Answer"
      }

      }

      update(){
        this. errorMessage = "";
    
        
  
  
          this. errorMessage ="";
          this.Api.changepassword(this.email, this.mylogin.username, this.mylogin.password).subscribe(response => {
      
            console.log(response.message);
            if (response.message .includes("Account updated")) {
          
              this. errorMessage ="Successfully changed the password"
              this.showlogin = true;
              this.showpwd =false;

           } else  {
          //  this.errorMessage = response. errorList[0].description;
          //     this.setErrorMessage(this.errorMessage);
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


        LOGIN(){
          this.router.navigate(['/login']);
        }
  

      }


