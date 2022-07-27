import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDelteComponent } from './student-delte.component';

describe('StudentDelteComponent', () => {
  let component: StudentDelteComponent;
  let fixture: ComponentFixture<StudentDelteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDelteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDelteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
