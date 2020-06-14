import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

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

      console.log(response.found.Email);
      if (response.found.Email) {

         this.localStorageService.set('ID', response.found.Email);
         this.localStorageService.set('Status', response.found.Status);
         this.localStorageService.set('ChoohooID', response.found.ChoohooID);
         this.localStorageService.set('ResellerID', response.found.ResellerID);
         this.localStorageService.set('AdminStatus', response.found.AdminStatus);
         this.localStorageService.set('state', 'in');
        // this.localStorageService.set('userId', this.mylogin.username);
         this.router.navigate(['/menu']);
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
