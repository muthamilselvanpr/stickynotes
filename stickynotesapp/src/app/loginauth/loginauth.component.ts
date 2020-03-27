import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-loginauth',
  templateUrl: './loginauth.component.html',
  styleUrls: ['./loginauth.component.scss']
})
export class LoginauthComponent implements OnInit {
  constructor(public authService: AuthService,private router: Router) { }
  ngOnInit(): void {
  }

  signOut(){
    this.authService.Logout();
    this.router.navigate(['/login']);
  }
  

}
