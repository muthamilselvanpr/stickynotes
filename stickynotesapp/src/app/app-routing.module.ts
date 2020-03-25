import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskscardsComponent } from './taskscards/taskscards.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginauthComponent } from './loginauth/loginauth.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthService } from './auth.service';


const routes: Routes = [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path:'login', component:LoginauthComponent}, 
      { path: 'AddTask', component:AddtaskComponent },
      { path: 'ViewTasks', component:  TaskscardsComponent},
      { path: 'ContactUS', component: ContactusComponent},
      {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
