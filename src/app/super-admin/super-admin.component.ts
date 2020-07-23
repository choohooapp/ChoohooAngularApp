import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  mylogin = {username: '', stationID: '', password: ''};
  details = {ChoohooID: '', Surname: '', AdminStatus: ''};
  role ="";
  errorMessage ='';
  showAdmin = false;
  showtable = false;
  constructor() { }

  ngOnInit(): void {
  }

  search(){}

  addAction(action:String){}
}
