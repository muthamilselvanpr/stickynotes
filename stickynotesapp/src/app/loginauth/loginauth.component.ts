import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginauth',
  templateUrl: './loginauth.component.html',
  styleUrls: ['./loginauth.component.scss']
})
export class LoginauthComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  

}
