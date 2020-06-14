import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  mylogin = {username: '', stationID: '', password: ''};
  details = {ChoohooID: '', Surname: '', AdminStatus: ''};

  errorMessage =''
  showtable = false;
  constructor(public Api :ApiService) { }

  ngOnInit(): void {
  }
  search(){
    this.showtable = false;

    if(this.mylogin.username ==''){

    }else{
      this. errorMessage = "";

    


      this. errorMessage ="";
      this.Api.search( this.mylogin.username).subscribe(response => {



        if (response) {
          if (response.user) {
            
            this.details.ChoohooID = response.user.ChoohooID;
            this.details.Surname = response.user.Surname;

            this.details.AdminStatus = response.user.AdminStatus;
            if(this.details.AdminStatus =="0"){
              this.details.AdminStatus = "player"
            }
           this.showtable = true;
            // this.showlogin = true;
            // this.showpwd =false;
    
         }
         if (response.message =="notfound") {
      
          this. errorMessage ="User not Found"
          // this.showlogin = true;
          // this.showpwd =false;

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
    addAction(action:String){
      this.showtable = false;
      console.log(action);
  
      if(action ==''){
  
      }else{
        this. errorMessage = "";
  
      
  
  
        this. errorMessage ="";
        this.Api.add( this.mylogin.username,action).subscribe(response => {
  
  
  
          if (response) {

            if (response.message == "Account deteled") {

              this. errorMessage ="Account Deleted"
              this.showtable = false;
            }



            if (response.message == "Account updated") {
              
              this. errorMessage ="Account updated"
              this.Api.search( this.mylogin.username).subscribe(response => {



                if (response) {
                  if (response.user) {
                    
                    this.details.ChoohooID = response.user.ChoohooID;
                    this.details.Surname = response.user.Surname;
        
                    this.details.AdminStatus = response.user.AdminStatus;
                    if(this.details.AdminStatus =="0"){
                      this.details.AdminStatus = "player"
                    }
                   this.showtable = true;
                    // this.showlogin = true;
                    // this.showpwd =false;
            
                 }
                 if (response.message =="notfound") {
              
                  this. errorMessage ="User not Found"
                  // this.showlogin = true;
                  // this.showpwd =false;
        
               }
          
               }
          
               
            
              
          },
              error => {
          
              
        
            if(error.status =="0"){
              this. errorMessage ="Service Unavaliable"
             }
                
                });
           
      
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
