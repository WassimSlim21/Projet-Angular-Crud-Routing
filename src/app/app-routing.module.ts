import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent} from './update-user/update-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  { path: 'dash', component: DashboardComponent, children: [
    { path: 'crud', component: CreateUserComponent },
    { path: 'user/:id', component: UpdateUserComponent },
    { path: 'users', component: ListUsersComponent }
  ] },  
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
