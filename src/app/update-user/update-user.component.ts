import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userForm: FormGroup;
  index: number;
  users: User[];
  
  constructor(private route: ActivatedRoute, private router: Router) {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, , Validators.minLength(5)]),
      lastName: new FormControl('', [Validators.required, , Validators.minLength(8)]),
    });
   }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('listTodo'));
    this.getUser();
  }

  updateUser(): void {
    this.users[this.index] = this.userForm.value;
    localStorage.setItem('listTodo', JSON.stringify(this.users));
    this.router.navigate(['/dash/users']);
  }

  getUser() {
    this.index= +this.route.snapshot.paramMap.get('id');
    let user = this.users[this.index];
    this.userForm.setValue(user);    
  }
}
