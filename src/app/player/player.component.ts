import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  constructor(public router: Router,public Api :ApiService ,private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }
  logout(){
    this.localStorageService.clearAll();
    this.router.navigate(['/login']);

   
    
    
  }

}
