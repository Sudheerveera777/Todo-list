import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { TodosComponent } from "./todos/todos.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "./auth.guard";
import { UserTodosFilterPipe } from './pipes/user-todos-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodosComponent,
    UserTodosFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
