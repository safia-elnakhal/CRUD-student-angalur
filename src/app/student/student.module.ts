import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { FormsModule } from '@angular/forms';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDelteComponent } from './student-delte/student-delte.component';
import { StudentDeatilsComponent } from './student-deatils/student-deatils.component';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentAddComponent,
    StudentEditComponent,
    StudentDelteComponent,
    StudentDeatilsComponent
  ],
  imports: [
    CommonModule,FormsModule
  ], exports: [
    StudentListComponent,StudentAddComponent
  ]
})
export class StudentModule { }
