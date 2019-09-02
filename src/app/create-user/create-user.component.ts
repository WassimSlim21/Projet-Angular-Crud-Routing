import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  submitted: boolean = false;
  users: User[]=[];
  index = 0;
  userForm: FormGroup;
  user:User=null;
  constructor(private router: Router) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
    this.users = JSON.parse(localStorage.getItem('listTodo'));
  
    // localStorage.setItem('listTodo','');
    
  }
  addUser() {
    this.submitted = true;
    if(this.userForm.valid) {
       this.user = new User(this.userForm.value.firstName, this.userForm.value.lastName);
      this.users.push(this.user);
      console.log(this.users)

      localStorage.setItem('listTodo', JSON.stringify(this.users));
      this.userForm.reset();
      this.submitted = false;
      this.router.navigate(['/dash/users']);
    }
    
    
  }

  

  selectUser(i): void {
    this.index = i;
    }

}
