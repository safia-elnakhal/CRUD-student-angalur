import { StudentService } from './../../services/student.service';
import { Component, OnInit} from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  
})
export class StudentListComponent implements OnInit {
  eflag= false;
  studetIdToEdit: number = 1;
  students: Student[] = []
  //instead  >>>> use service
  // students: Student[] = [
  //   new Student(1, "safia", 25),
  //   new Student(2, "sara", 20),
  //   new Student(3, "Noah", 30),
  //   new     Student(4,"Hala",35),
  
  // ]
  
  // addToList(s: Student) {
  //   this.students.push(s)
  // }
 
//inested of use DIC==>dependancy injection Componentet
   //stdser: StudentService = new StudentService();
////////////////////////////////
  changeIdToEdit(n:number) {
    this.studetIdToEdit = n;
    // this.studetIdToEdit = item.id;

    // this.eflag = !this.eflag ==>
    this.stdser.eflag = !this.stdser.eflag;
   }
  constructor(public stdser:StudentService) { 
  
    this.students =this.stdser.getAllStudents();

  }

  ngOnInit(): void {
  }

}
