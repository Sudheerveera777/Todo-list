import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import users from '../mock-data/users-response.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  userValidity = {
    invalid: false,
    message: ''
  }
  constructor(private router: Router) {}

  get formControls() { return this.loginForm.controls; }

  checkUserExistence(currentUser, allUsers) {
    let loggedInUserData = false;
    allUsers.some(user => {
      let userFound = user.username === currentUser;
      if(userFound) {
        loggedInUserData = user;
      }
      return userFound;
    });
    return loggedInUserData;
  }

  handleLoginError(show) {
    this.userValidity.invalid = show;
    this.userValidity.message = show ? `No user with username '${this.loginForm.value.username}' was found.` : '';
  }

  loginUser(): void {
    if(this.loginForm.valid) {
      let loggedInUserData = this.checkUserExistence(this.loginForm.value.username, users);
      if(loggedInUserData) {
        this.handleLoginError(false);
        sessionStorage.setItem('currentUser', JSON.stringify({id: loggedInUserData['id'], name: loggedInUserData['name']}));
        this.router.navigateByUrl('/todos');
      } else {
        this.handleLoginError(true);
      }
    }
  }

  ngOnInit(): void {}

}
