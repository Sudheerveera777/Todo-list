import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import {TodosComponent} from "./todos/todos.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},{
  path: 'todos',
  component: TodosComponent,
  canActivate: [AuthGuard]
},{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},{
  path: '**',
  redirectTo: 'login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
