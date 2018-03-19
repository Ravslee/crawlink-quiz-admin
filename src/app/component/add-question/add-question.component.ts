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
  public json:string;
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
      .then((res:any) => {
        var question:Question = new Question();

        question._id = res.id;
        question.a = res.a;
        question.b = res.b;
        question.c = res.c;
        question.d = res.d;
        question.ans = res.ans;
       
        this.dataProviderService
        .updateQuestion(question,question._id)
        .then(res=>{
          console.log("Question Added Successfully! with id - "+ question._id);
          this.question = {};
        });
      })
  }

}
