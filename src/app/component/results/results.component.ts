import { Component, OnInit } from '@angular/core';
import {Result} from '../../models/Result'
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
public results:Array<any>;
  constructor() { 
    this.results = [];
  }
  ngOnInit() {
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});
    this.results.push({"email":"rav","phone":"89","score":"10"});



  }

}
