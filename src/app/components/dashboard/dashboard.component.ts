import { Component } from '@angular/core';
import { ClassroomService } from 'src/app/classroom.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  classes: any[] = [];

  constructor(private classroomService: ClassroomService) {}

  ngOnInit(): void {
    this.classroomService.getClasses().subscribe(
      (data: any) => {
        this.classes = data;
      },
      (error: any) => {
        console.log('Error fetching classes', error);
      }
    );
  }
}
