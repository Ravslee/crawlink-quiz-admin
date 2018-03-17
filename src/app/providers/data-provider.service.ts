import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { Question } from '../models/Question';

@Injectable()
export class DataProviderService {
  QuestionCollectionRef: any;
  db: any;
  constructor() {
    this.db = firebase.firestore();
    this.QuestionCollectionRef = this.db.collection('crawlink')
      .doc('quiz')
      .collection('questions');
  }

  addQuestion(question: object) {
    var q = JSON.parse(JSON.stringify(question))
    return new Promise((resolve, reject) => {
      this.QuestionCollectionRef
        .add(q)
        .then((data) => {
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        })
    });

  }

  public getAllQuestions() {
    return new Promise((resolve, reject) => {
      this.QuestionCollectionRef.get()
        .then((querySnapshot) => {
          let obj = [];
          querySnapshot
            .forEach((doc: any) => {
              obj.push({
                _id: doc.id,
                question: doc.data().question,
                a: doc.data().a,
                b: doc.data().b,
                c: doc.data().c,
                d: doc.data().d,
                ans: doc.data().ans
              });
            });
          resolve(obj);
        })
        .catch((err) => {
          reject(err);
        })
    })
  }

  public deleteQuestion(doc_id) {

    return new Promise((resolve, reject) => {
      this.QuestionCollectionRef
        .doc(doc_id)
        .delete()
        .then(data => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        })
    })


  }

  public updateQuestion(question, doc_id) {
    var q = JSON.parse(JSON.stringify(question))

    return new Promise((resolve, reject) => {
      this.QuestionCollectionRef.doc(doc_id)
        .update(q)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        })
    })
  }
}
