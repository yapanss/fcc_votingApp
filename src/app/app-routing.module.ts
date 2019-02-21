import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { AddPollComponent } from './add-poll/add-poll.component'
import { ListPollComponent } from './list-poll/list-poll.component'
import { DetailPollComponent } from './detail-poll/detail-poll.component'
import { GuardService } from './services/guard.service'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'new', component: AddPollComponent, canActivate: [GuardService]},
  {path: 'poll', component: ListPollComponent},
  {path: 'mypoll', component: ListPollComponent, canActivate: [GuardService]},
  {path: 'poll/:id', component: DetailPollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
