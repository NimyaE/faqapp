import { Injectable } from '@angular/core';
import{Question} from '../model/question';

@Injectable()
export class DataService {

  questions:Question[];

  constructor() { 
    this.questions=[
      {
        text:'what is your name?',
        answer:'my name is juan',
        hide:true
      },
      {
       text:'what is your favorite color?',
       answer:'my favorite color  is blue',
       hide:true
     },
     {
       text:'what is your favorite language?',
       answer:'my favorite language is angular js',
       hide:true
     }
    ];
  }

  getquestion(){
   return this.questions
  }
  addQuestions(question:Question)
  {
this.questions.unshift(question);
  }

}
