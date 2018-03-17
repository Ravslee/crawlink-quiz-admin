import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../providers/data-provider.service';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  public question: any;
  constructor(private dataProviderService: DataProviderService) { }

  ngOnInit() {
    this.question = new Question();
  }

 public addQuestion() {
    if (!this.question.question) {
      console.log("question required");
      return;
    }
    if (!this.question.a) {
      console.log("all options required");
      return;
    }
    if (!this.question.b) {
      console.log("all options required");
      return;
    }
    if (!this.question.c) {
      console.log("all options required");
      return;
    }
    if (!this.question.d) {
      console.log("all options required");
      return;
    }
    this.dataProviderService
      .addQuestion(this.question)
      .then((res)=>{
          console.log("Question Added Successfully!");
          this.question = {};
      })
  }

}
