import { Component, OnInit } from '@angular/core';
import{DataService} from '../../services/data.service';
import{Question} from '../../model/question';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {
questions:Question[];
  
constructor(public dataservice:DataService)
   { 
     
   }

  ngOnInit() {
    this.questions=this.dataservice.getquestion();
  }
  addQuestion(question:Question){
this.dataservice.addQuestions(question);
  }

}
