import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClassComponent } from './components/class/class.component';
import { SessionComponent } from './components/session/session.component';

const routes: Routes = [
  {path:'', redirectTo: '/login' , pathMatch: 'full'},
  {path: 'login', component:LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'classes/:id', component: ClassComponent },
  { path: 'sessions/:id', component: SessionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
