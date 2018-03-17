import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../component/home/home.component';
import { LoginComponent } from '../../component/login/login.component';
import { Component } from '@angular/core/src/metadata/directives';
import { AddQuestionComponent } from '../../component/add-question/add-question.component';
import { ResultsComponent } from '../../component/results/results.component';
import { QuestionsComponent } from '../../component/questions/questions.component';

const appRoutes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'questions' },
      {path:'questions' , component:QuestionsComponent},
      { path: 'addquestion', component: AddQuestionComponent },
      { path: 'results', component: ResultsComponent }]
  },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: []
})
export class RoutingModule { }
