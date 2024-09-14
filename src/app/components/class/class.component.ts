import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassroomService } from 'src/app/classroom.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
})
export class ClassComponent implements OnInit {
  class: any = {};
  isInstructor = false;

  constructor(
    private classroomService: ClassroomService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const classId = this.route.snapshot.paramMap.get('id');
    this.classroomService['getClassById'](classId).subscribe(
      (data: { instructorId: number; }) => {
        this.class = data;
        this.isInstructor = data.instructorId === this.getLoggedInUserId();
      },
      (error: any) => {
        console.log('Error fetching class', error);
      }
    );
  }

  getLoggedInUserId() {
    // Assuming user info is stored in token or session
    return 1; // Example
  }

  addUnit() {
    // Logic for adding a new unit
  }
}
