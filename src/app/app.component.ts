import { StudentService } from './services/student.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers:[StudentService]
})
export class AppComponent {
  title = 'demo1';
}
