import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  ID_Details: any[] = [];
  searchkeyword: string = '';
  coloumnName: string = '';
  sortOrder: string = '';
  items: number = 0;
  pagenumber: number = 0;

  constructor(private _studentService: StudentService, private router: Router) {
    this.loadStudentDetails();
  }

  loadStudentDetails() {
    this._studentService.getStudentdetails().subscribe(
      (studentdata: any) => {
        this.ID_Details = studentdata;
      },
      (err: any) => {
        alert("Internal server Error");
      }
    );
  }

  search() {
    this._studentService.getFilteredStudent(this.searchkeyword).subscribe(
      (data: any) => {
        this.ID_Details = data;
      },
      (err: any) => {
        alert('Internal server error');
      }
    );
  }

  sort() {
    this._studentService.getSortedStudentDetails(this.coloumnName, this.sortOrder).subscribe(
      (data: any) => {
        this.ID_Details = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    );
  }

  pagination() {
    this._studentService.getPaginatedStudent(this.items, this.pagenumber).subscribe(
      (data: any) => {
        this.ID_Details = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    );
  }

  
  create() {
    this.router.navigateByUrl('/dashboard/creatStudent');
  }

  delete(id: any) {
    if (confirm("Are you sure to delete?")) {
      this._studentService.deleteStudent_id(id).subscribe(
        (data: any) => {
          alert("ID deleted successfully");
          this.loadStudentDetails();
        },
        (err: any) => {
          alert("Internal server error");
        }
      );
    } else {
      alert("You have cancelled the delete");
    }
  }
}