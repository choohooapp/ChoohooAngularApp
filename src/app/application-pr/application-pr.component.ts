import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-application-pr',
  templateUrl: './application-pr.component.html',
  styleUrls: ['./application-pr.component.css']
})
export class ApplicationPrComponent implements OnInit {
  errorMessage="";
  username =""
  showdf =false;
  pdfSrc =''
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

    this.Api.getResllers( ).subscribe(response => {
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
  addAction(email:string  ,code:string ){

    if(code ==="ap"){
      code ='Approved'
      console.log(email);
      this. addA(email,code)
    }
    if(code ==="rj"){
      code ='Rejected'
      
      this. addA(email,code)
    }


 


  }
  view(email:string  ){
    console.log(email);
    this.pdfSrc =email

    this.showdf= true;

    }




    addA(email :string ,action:string){

      console.log(action);
  
      if(action ==''){
  
      }else{
        this. errorMessage = "";
  
      
  
  
        this. errorMessage ="";
        this.Api.updateResellerStatus( email,action).subscribe(response => {
  
  
  
          if (response) {

            if (response.message == "Account deteled") {

              this. errorMessage ="Account Deleted"
            //  this.showtable = false;
            }



            if (response.message == "Account updated") {
              this.ItemsArray ="";
            this.getME();
        
    
         }
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
    

}


