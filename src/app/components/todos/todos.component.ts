import { Component, OnInit } from '@angular/core';
import todos from '../../mock-data/todos-respone.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  currentUser: any = {};
  allTodos = todos;
  isCompletedChecked = false;
  constructor(private router: Router) { }


  logoutUser(): void {
    sessionStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  }

}
