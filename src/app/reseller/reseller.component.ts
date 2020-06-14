import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reseller',
  templateUrl: './reseller.component.html',
  styleUrls: ['./reseller.component.css']
})
export class ResellerComponent implements OnInit {

  mylogin = {username: '', stationID: '', password: ''};
  details = {ChoohooID: '', Surname: '', AdminStatus: ''};
showmore = false;
  comp="";
  errorMessage="";
  reseller = {Type: '', Surname: '', Name: '' ,Email:"" ,Country:"",City:"",Address:"",Gender:"", DOB:"",Mobilenumber:"" ,
  Document:"",
  Documentkey:"",


};
  imageObj: File;
  imageUrl: string;
  showtable = false;
  constructor(public Api :ApiService,  public router: Router) { }

  ngOnInit(): void {



  }

  onImagePicked(event: Event): void {
    const FILE = (event.target as HTMLInputElement).files[0];
    this.imageObj = FILE;
  }

  onImageUpload() {
    const imageForm = new FormData();
    imageForm.append('image', this.imageObj);
    imageForm.append('name',"waynedd");
    imageForm.append('username',"wayne");
    imageForm.append('ig',"waynets");
    imageForm.append('fb',"waynets");
    imageForm.append('username',"444444");

    this.Api.imageUpload(imageForm).subscribe(res => {

      // if(res){
        
      //   this.reseller.Document = res.image;
      //   this.reseller.Documentkey = res.key
      //   this.update(this.reseller.Document,this.reseller.Documentkey);
       
      // }
  
     // this.imageUrl = res.image;
    });
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
      
          this. errorMessage ="Reseller Not Found"
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

      submit(){
        this.Api.apply( this.reseller).subscribe(response => {
  
  
  
          if (response) {

       



            if (response.message) {
              
              this. errorMessage = response.message;
              if(this.errorMessage  ==="Created"){
                this.onImageUpload();

              }
    
           
      
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
      company(){
        console.log(this.comp)
      }

      onOptionsSelected(value:string){
        this.comp = value;
        if(this.comp ==="yes"){
        this.showmore = true;
        }
        if(this.comp ==="no"){
          this.showmore = false;
          }

        console.log("the selected value is " + value);
   }




   update(doc :string,key:string){
    this.Api.updateReseller( this.reseller.Email,doc,key).subscribe(response => {



      if (response) {

   



        if (response.message) {
          
          this. errorMessage = response.message;
          if(this.errorMessage  ==="Account updated"){
            this. errorMessage ="Succesfully Registered";
            
            this.router.navigate(['/pf']);
          }

       
  
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
  getME(){

    this.Api.getPrice( ).subscribe(response => {
      if (response) {

      

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
