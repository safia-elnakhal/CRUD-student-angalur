import { StudentService } from './../../services/student.service';
import { Student } from './../../_models/student';
import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit{

  @Input()
  id: number = 1;
  std:Student=new Student(0,"",15)

  update() {
    this.stdser.updateStudent(this.std)
    this.stdser.eflag = !this.stdser.eflag;  
  }
  constructor(public stdser:StudentService) { }

  ngOnChanges(changes:SimpleChange): void{
    this.std=this.stdser.getStudentById(this.id)
  }


  ngOnInit(): void {
  
  }

}
 