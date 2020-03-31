import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {

  entries: Entry[]=[];
  newEntry = new Entry("","",new Date());


  deleteEntry(index){
    this.entries.splice(index,1)
  }

  diaryForm = new FormGroup({
      title: new FormControl("",Validators.required),
      date: new FormControl(""),
      content: new FormControl("",Validators.required)

  });

  onSubmit(){ if(this.diaryForm.valid){
       let entry =  this.newEntry
       this.entries.push(entry)
       console .log(this.diaryForm.controls["content"].value)
     }
   }
  constructor() { }

  ngOnInit(): void {
  }

}
