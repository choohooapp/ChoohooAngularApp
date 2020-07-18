import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public router: Router,public Api :ApiService ,private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }
  logout(){
    this.localStorageService.clearAll();
    this.router.navigate(['/login']);

   
    
    
  }
}
