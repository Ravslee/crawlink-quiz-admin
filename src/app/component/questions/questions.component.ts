import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../providers/data-provider.service';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions:any;
  constructor(private dataProviderService:DataProviderService) {
      this.questions = [];
   }

  ngOnInit() {
    this.getAllQuestions();
  }

  public getAllQuestions(){
    this.dataProviderService
    .getAllQuestions()
    .then(res=>{
        this.questions = res;
    })
  }
}
