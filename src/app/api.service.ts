import { Injectable } from '@angular/core';



import 'rxjs/Rx';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { CodeNode } from 'source-list-map';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }


  url = 'http://localhost:9000';

  login(username: string, password: string) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      
        

      })
    };
    return this.http.post<any>(this.url + '/login', {  
      Email: username,
  
      password: password



    }, httpOptions)
      .map(user => {

        return user;
      });
  }
  reset(username: string, password: string) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      
        

      })
    };
    return this.http.post<any>(this.url + '/reset', {  
      Email: username,
  
    



    }, httpOptions)
      .map(user => {

        return user;
      });
  }

  sendverifyCode(username: string, password: string) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      
        

      })
    };
    return this.http.post<any>(this.url + '/sendverifyCode', {  
      Email: username,
  
    



    }, httpOptions)
      .map(user => {

        return user;
      });
    }
    findme(username: string) {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        
          
  
        })
      };
      return this.http.post<any>(this.url + '/findReseller', {  
        Email: username,
    
      
  
  
  
      }, httpOptions)
        .map(user => {
  
          return user;
        });
      }

      getResllers() {

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
          
            
    
          })
        };
        return this.http.get<any>(this.url + '/getResellers', {  
      
      
      
    
    
        }, )
          .map(user => {
    
            return user;
          });
        }

      getPrice() {

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
          
            
    
          })
        };
        return this.http.get<any>(this.url + '/getPrice', {  
      
      
      
    
    
        }, )
          .map(user => {
    
            return user;
          });
        }


      updateReseller(username: string, pro :string,key:string) {

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
          
            
    
          })
        };
        return this.http.post<any>(this.url + '/updatedFiles', {  
          Email: username,
          Document: pro,
          Documentkey: key
      
        
    
    
    
        }, httpOptions)
          .map(user => {
    
            return user;
          });
        }
        updateResellerStatus(username: string, status :string) {

          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            
              
      
            })
          };
          return this.http.post<any>(this.url + '/updatedReseller', {  
            Email: username,
            Status: status,
           
        
          
      
      
      
          }, httpOptions)
            .map(user => {
      
              return user;
            });
          }

  apply(user:any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      
        

      })
    };
    return this.http.post<any>(this.url + '/apply', {  
      Type: user.Type,
      Name: user.Name,
      Email:user.Email,
      Country:user.Country,
      City:user.City,
      Address:  user.Address,
      Gender:user.Gender,
      DOB:user.DOB,
      Document:user.Document,
       Documentkey:user.Documentkey,
      Mobilenumber:user.Mobilenumber
  
    



    }, httpOptions)
      .map(user => {

        return user;
      });
    }
    changepassword(username: string, code :string ,password: string) {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        
          
  
        })
      };
      return this.http.post<any>(this.url + '/changepassword', {  
        Email: username,
        Code: code,
        password:password
      
  
  
  
      }, httpOptions)
        .map(user => {
  
          return user;
        });
      }
      search(username: string) {

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
          
            
    
          })
        };
        return this.http.post<any>(this.url + '/getAccount', {  
          Email: username,
      
        
    
    
    
        }, httpOptions)
          .map(user => {
    
            return user;
          });
        }
        add(username: string,status:String) {

          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            
              
      
            })
          };
          return this.http.post<any>(this.url + '/addAdmin', {  
            Email: username,
            AdminStatus:status
          
      
      
      
          }, httpOptions)
            .map(user => {
      
              return user;
            });
          }
          imageUpload(imageForm: FormData) {
            console.log('image uploading');
            return this.http.post('http://localhost:9000/upload', imageForm);
          }



          setprice(username: string) {

            const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json',
              
                
        
              })
            };
            return this.http.post<any>(this.url + '/setPrice', {  
              price: username,
          
          
            
        
        
        
            }, httpOptions)
              .map(user => {
        
                return user;
              });
            }





          history(username: string) {

            const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json',
              
                
        
              })
            };
            return this.http.post<any>(this.url + '/Gameunit4seller', {  
              ResellerID: username,
          
          
            
        
        
        
            }, httpOptions)
              .map(user => {
        
                return user;
              });
            }
            buyUnits(data: any) {

              const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                
                  
          
                })
              };
              return this.http.post<any>(this.url + '/buyReseller', {  
                Type:data.Type,
                Name: data.Name,
                Surname:data.Surname,
                Email:data.Email,
                method: data.method ,
                units:data.units,
                 Country:data.Country,
                 transcationID:data.transcationID,
                  price:data.price, 
                  ResellerID:data.ResellerID, 
    

          
              }, httpOptions)
                .map(user => {
          
                  return user;
                });
              }
}
