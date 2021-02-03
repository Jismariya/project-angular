import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskPoolComponent } from './task-pool/task-pool.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'taskpool', component: TaskPoolComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
