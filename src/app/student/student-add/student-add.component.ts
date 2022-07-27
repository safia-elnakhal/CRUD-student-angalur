import { StudentService } from './../../services/student.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
  
})
export class StudentAddComponent implements OnInit {

  std: Student = new Student(0, "", 20)

  // @Output()
  // studentAdded: EventEmitter<Student> = new EventEmitter<Student>();
   //stdser: StudentService = new StudentService();
  
  save() {
    // this.studentAdded.emit(this.std)
   // this.students.push(new Student(this.std.id,this.std.name,this.std.age))
    
   this.stdser.addStudent(this.std);
    console.log(this.stdser.getAllStudents());
    
  }

  constructor(public stdser:StudentService) { }

  ngOnInit(): void {
  }

}
