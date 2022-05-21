import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {TodosComponent} from './components/todos/todos.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
  canActivate: [LoginGuard]
}, {
  path: 'todos',
  component: TodosComponent,
  canActivate: [AuthGuard]
}, {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
