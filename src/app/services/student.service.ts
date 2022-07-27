import { Student } from './../_models/student';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    new Student(1, "safia", 25),
    new Student(2, "sara", 20),
    new Student(3, "Noah", 30),
    new Student(4, "Hala", 35),
  
  ];
  getAllStudents() {
    return this.students;
  }
  
  addStudent(std: Student) {
    this.students.push(new Student(std.id,std.name,std.age))
  }
  getStudentById(id: number){
  for (let index = 0; index < this.students.length; index++){
    if (this.students[index].id == id)
      return new Student(this.students[index].id,this.students[index].name,this.students[index].age)
     // return this.students[index];
  }
  //return null;
  return new Student(-1,"",0)
}
  eflag = false;
  
  updateStudent(std: Student) {
    for (let index = 0; index < this.students.length; index++){
      if (this.students[index].id == std.id) {
        this.students[index].name = std.name;
        this.students[index].age = std.age;
        return;
      }
    }
  }
  
  
  constructor() { }
}
