import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit(): void {}

  logout(): void {
    // Remove JWT from local storage.
    localStorage.removeItem('access_token');

    // Redirect to login page.
    this.router.navigate(['login']);
  }

  canLogout(): boolean {
    return this.authenticationService.hasToken();
  }
}
