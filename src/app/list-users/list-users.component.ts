import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[];
  filterInput: string = "";

  constructor() { }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('listTodo'));
  }

  deleteUser(i): void {
    this.users.splice(i, 1);
    localStorage.setItem('listTodo', JSON.stringify(this.users));
  }

}
