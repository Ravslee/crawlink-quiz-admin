import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes,RouterOutlet } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import * as firebase from 'firebase'
import {RoutingModule} from './routing/routing/routing.module'
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import {environment} from '../environments/environment'
import { AuthService } from './providers/auth.service';
import { AddQuestionComponent } from './component/add-question/add-question.component';
import { ResultsComponent } from './component/results/results.component';
import {DataProviderService} from './providers/data-provider.service';
import { QuestionsComponent } from './component/questions/questions.component'
firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddQuestionComponent,
    ResultsComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
    
  ],
  providers: [AuthService,DataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
