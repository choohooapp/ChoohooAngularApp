import { Component, AfterViewInit,OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  title = 'ChoohooUX';
role =""
state =""
showbtn = false;
showAdmin  =  false
showmenu  = false;
  constructor(public router: Router,public Api :ApiService ,private localStorageService: LocalStorageService) {

   
   }

  

  ngOnInit(): void {
 
   
  }
  ngAfterViewInit(){
    this.getRole();
  }



  getRole(){

    this.role = this.localStorageService.get('AdminStatus');
   
    if(this.role =="SuperAdmin"){
      this.showAdmin = true;
      this.showmenu = true;
      console.log(this.role)
 
    }
    if(this.role =="AdminManager"){
      this.showAdmin = true;
      this.showmenu = true;
    }
    if(this.role =="0"){
      this.showAdmin = false;
      
     
    }

  }

  logout(){
    this.localStorageService.clearAll();
    this.router.navigate(['/login']);

   
    
    
  }

}
