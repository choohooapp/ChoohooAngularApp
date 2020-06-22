import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
const helper = new JwtHelperService();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mylogin = {username: '', stationID: '', password: ''};
  showReset =false;
  errorMessage =""
  state =""

  constructor(public Api :ApiService, private localStorageService: LocalStorageService, public router: Router) { }

  ngOnInit(): void {
   

  }
  Login(){
    this. errorMessage ="";
    this.Api.login(this.mylogin.username, this.mylogin.password).subscribe(response => {

     // console.log(response.found.Email);
      if (response) {

        if(response.token){
          const decodedToken = helper.decodeToken(response.token);
           this.localStorageService.set('ID', decodedToken.user.Email);
           this.localStorageService.set('Status',decodedToken.user.Status);
           this.localStorageService.set('ChoohooID',decodedToken.user.ChoohooID);
           this.localStorageService.set('ResellerID', decodedToken.user.ResellerID);
           this.localStorageService.set('AdminStatus', decodedToken.user.AdminStatus);
           this.localStorageService.set('state', 'in');

           const role = this.localStorageService.get('AdminStatus');
   
           if(role =="SuperAdmin"){
            this.router.navigate(['/ad']);
        
           }
           if(role =="AdminManager"){
            this.router.navigate(['/ad']);
           }
           if(role =="0"){
          
            this.router.navigate(['/pr']);
           
          }
          
        }
 
        // this.localStorageService.set('userId', this.mylogin.username);
        
     } else  {
    //  this.errorMessage = response. errorList[0].description;
    //     this.setErrorMessage(this.errorMessage);
      }
},
    error => {

    
  if(error.status =="401"){
   this. errorMessage ="Wrong Email or  Password"
  }
  if(error.status =="0"){
    this. errorMessage ="Service Unavaliable"
   }
      
      });
    }
  
    showPWD(){
      this.router.navigate(['/fgt']);

    }


 
  }
